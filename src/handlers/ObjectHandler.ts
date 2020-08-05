import {
	Color,
	LineBasicMaterial,
	BufferGeometry,
	BufferAttribute,
	Line,
	Vector3,
	Group,
	Box3Helper,
	Box3,
	Matrix4,
} from 'three';
import { CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer';

import Threebox, { ThreeboxObject } from '../Threebox';

export type ObjectType =
	| 'colors'
	| 'materials'
	| 'line'
	| 'sphere'
	| 'label'
	| 'tooltip'
	| 'tube'
	| 'extrusion'
	| 'loadModel'
	| 'object3D';

class ObjectHandler {
	threebox: Threebox;
	map: mapboxgl.Map;
	defaults: { [key in ObjectType]: Record<string, any> } = {
		colors: {
			red: new Color(0xff0000),
			yellow: new Color(0xffff00),
			green: new Color(0x00ff00),
			black: new Color(0x000000),
		},
		materials: {
			boxNormalMaterial: new LineBasicMaterial({ color: new Color(0xff0000) }),
			boxOverMaterial: new LineBasicMaterial({ color: new Color(0xffff00) }),
			boxSelectedMaterial: new LineBasicMaterial({ color: new Color(0x00ff00) }),
		},
		line: {
			geometry: null,
			color: 'black',
			width: 1,
			opacity: 1,
		},
		sphere: {
			position: [0, 0, 0],
			radius: 1,
			sides: 20,
			units: 'scene',
			material: 'MeshBasicMaterial',
			adjustment: { x: 0, y: 0, z: 0 },
		},
		label: {
			htmlElement: null,
			cssClass: ' label3D',
			alwaysVisible: false,
			topMargin: -0.5,
			feature: null,
		},
		tooltip: {
			text: '',
			cssClass: 'toolTip text-xs',
			mapboxStyle: false,
			topMargin: 0,
			feature: null,
		},
		tube: {
			geometry: null,
			radius: 1,
			sides: 6,
			material: 'MeshBasicMaterial',
		},
		extrusion: {
			footprint: null,
			base: 0,
			top: 100,
			color: 'black',
			material: 'MeshBasicMaterial',
			scaleToLatitude: false,
		},
		loadModel: {
			type: null,
			obj: null,
			units: 'scene',
			scale: 1,
			rotation: 0,
			defaultAnimation: 0,
			adjustment: { x: 0, y: 0, z: 0 },
		},
		object3D: {
			obj: null,
			units: 'scene',
			adjustment: { x: 0, y: 0, z: 0 },
		},
	};
	geometries = {
		line: ['LineString'],
		tube: ['LineString'],
		sphere: ['Point'],
	};

	constructor(threebox: Threebox, map: mapboxgl.Map) {
		this.threebox = threebox;
		this.map = map;
	}

	// standard 1px line with gl
	line(obj: any) {
		obj = this.threebox.utils.validate(obj, this.defaults.line);

		// project to world and normalize
		const straightProject = this.threebox.utils.lnglatsToWorld(obj.geometry);
		const normalized = this.threebox.utils.normalizeVertices(straightProject);

		// flatten array for buffergeometry
		const flattenedArray = this.threebox.utils.flattenVectors(normalized.vertices);

		const positions = new Float32Array(flattenedArray); // 3 vertices per point
		const geometry = new BufferGeometry();
		geometry.setAttribute('position', new BufferAttribute(positions, 3));

		// material
		const material = new LineBasicMaterial({ color: 0xff0000, linewidth: 21 });
		const line = new Line(geometry, material);

		// line.options = options || {};
		line.position.copy(normalized.position);

		return line;
	}

	/**
	 * @deprecated
	 *
	 * @author salgum1114
	 * @param {*} option
	 */
	extrusion(option: any) {
		console.warn('[DEPRECATED] Not used', option);
	}

	addMethods(obj: ThreeboxObject, isStatic?: boolean) {
		const _self = this;
		if (isStatic) {
		} else {
			if (!obj.coordinates) {
				obj.coordinates = [0, 0, 0];
			}
			// Bestow this mesh with animation superpowers and keeps track of its movements in the global animation queue
			_self.threebox.animations.enroll(obj);

			obj.setCoords = (lnglat: number[]) => {
				/**
				 * Place the given object on the map, centered around the provided longitude and latitude
				 * The object's internal coordinates are assumed to be in meter-offset format, meaning
				 * 1 unit represents 1 meter distance away from the provided coordinate.
				 */

				// If object already added, scale the model so that its units are interpreted as meters at the given latitude
				// this method could be needed more times
				if (obj.userData.units === 'meters') {
					let s = this.threebox.utils.projectedUnitsPerMeter(lnglat[1]);
					if (!s) {
						s = 1;
					}
					s = Number(s.toFixed(7)); // this precision level is to avoid deviations on the size of the same object
					if (typeof s === 'number') {
						obj.scale.set(s, s, s);
					} else {
						const _s = s as THREE.Vector3;
						obj.scale.set(_s.x, _s.y, _s.z);
					} // initialize the object size and it will rescale the rest
				}

				// CSS2DObjects could bring an specific vertical positioning to correct in units
				if (obj.userData.topMargin && obj.userData.feature) {
					lnglat[2] +=
						(obj.userData.feature.properties.height -
							(obj.userData.feature.properties.base_height ||
								obj.userData.feature.properties.min_height ||
								0)) *
						obj.userData.topMargin;
				}

				obj.coordinates = lnglat;
				obj.set({ position: lnglat });
				// Each time the object is positioned, set modelHeight property and project the floor
				obj.modelHeight = obj.coordinates[2];
				obj.setBoundingBoxShadowFloor();
				return obj;
			};

			obj.setTranslate = (lnglat: number[]) => {
				obj.set({ translate: lnglat });
				return obj;
			};

			obj.setRotation = (xyz: number | { x?: number; y?: number; z: number }) => {
				if (typeof xyz === 'number') {
					xyz = { z: xyz };
				}
				const r = {
					x: this.threebox.utils.radify(xyz.x) || obj.rotation.x,
					y: this.threebox.utils.radify(xyz.y) || obj.rotation.y,
					z: this.threebox.utils.radify(xyz.z) || obj.rotation.z,
				};
				obj.setObject({ rotation: [r.x, r.y, r.z] });
			};

			// added method to adjust 3D models to their issues with center position for rotation
			obj.calcAdjustedPosition = (
				lnglat: number[],
				xyz: { x: number; y: number; z: number },
				inverse?: boolean,
			) => {
				const location = lnglat.slice();

				// we convert the units to Long/Lat/Height
				const newCoords = this.threebox.utils.unprojectFromWorld(obj.modelSize);

				if (inverse) {
					// each model will have different adjustment attributes, we add them for x, y, z
					location[0] -= xyz.x !== 0 ? newCoords[0] / xyz.x : 0;
					location[1] -= xyz.y !== 0 ? newCoords[1] / xyz.y : 0;
					location[2] -= xyz.z !== 0 ? newCoords[2] / xyz.z : 0;
				} else {
					// each model will have different adjustment attributes, we add them for x, y, z
					location[0] += xyz.x !== 0 ? newCoords[0] / xyz.x : 0;
					location[1] += xyz.y !== 0 ? newCoords[1] / xyz.y : 0;
					location[2] += xyz.z !== 0 ? newCoords[2] / xyz.z : 0;
				}
				return location;
			};

			// added method to rotate on objects on an axis instead of centers
			obj.setRotationAxis = (xyz: number | { x?: number; y?: number; z: number }) => {
				if (typeof xyz === 'number') {
					xyz = { z: xyz };
				}
				const bb = obj.modelBox();
				const point = new Vector3(bb.max.x, bb.max.y, bb.min.z);
				// apply Axis rotation on angle
				if (xyz.x !== 0) {
					applyAxisAngle(obj, point, new Vector3(0, 0, 1), xyz.x);
				}
				if (xyz.y !== 0) {
					applyAxisAngle(obj, point, new Vector3(0, 0, 1), xyz.y);
				}
				if (xyz.z !== 0) {
					applyAxisAngle(obj, point, new Vector3(0, 0, 1), xyz.z);
				}
			};

			// Auxiliar method to rotate an object on an axis
			function applyAxisAngle(
				model: ThreeboxObject,
				point: Vector3,
				axis: Vector3,
				degrees:
					| number
					| [number, number, number]
					| {
							x: number;
							y: number;
							z: number;
					  },
			) {
				const theta = _self.threebox.utils.radify(degrees) as number;
				model.position.sub(point); // remove the offset
				model.position.applyAxisAngle(axis, theta); // rotate the POSITION
				model.position.add(point); // re-add the offset
				model.rotateOnAxis(axis, theta);
				_self.map.repaint = true;
			}

			let _boundingBox: any;
			// added property for boundingBox helper
			Object.defineProperty(obj, 'boundingBox', {
				get() {
					return _boundingBox;
				},
				set(value) {
					_boundingBox = value;
				},
			});

			let _boundingBoxShadow: any;
			// added property for boundingBox helper
			Object.defineProperty(obj, 'boundingBoxShadow', {
				get() {
					return _boundingBoxShadow;
				},
				set(value) {
					_boundingBoxShadow = value;
				},
			});

			// added method to create a bounding box and a shadow box
			obj.drawBoundingBox = () => {
				// let's create 2 wireframes, one for the object and one to project on the floor position
				const bb = obj.box3();
				// create the group to return
				const boxGrid = new Group();
				boxGrid.name = 'BoxGrid';
				boxGrid.updateMatrixWorld(true);
				const boxModel = new Box3Helper(bb, _self.defaults.colors.yellow);
				boxModel.name = 'BoxModel';
				boxGrid.add(boxModel);
				boxModel.layers.disable(0); // it makes the object invisible for the raycaster
				obj.boundingBox = boxModel;

				// it needs to clone, to avoid changing the object by reference
				const bb2 = bb.clone();
				// we make the second box flat and at the floor height level
				bb2.max.z = bb2.min.z;
				const boxShadow = new Box3Helper(bb2, _self.defaults.colors.black);
				boxShadow.name = 'BoxShadow';

				boxGrid.add(boxShadow);
				boxShadow.layers.disable(0); // it makes the object invisible for the raycaster
				obj.boundingBoxShadow = boxShadow;

				boxGrid.visible = false; // visibility is managed from the parent
				return boxGrid;
			};

			// added method to position the shadow box on the floor depending the object height
			obj.setBoundingBoxShadowFloor = () => {
				if (obj.boundingBox) {
					obj.boundingBoxShadow.box.max.z = -obj.modelHeight;
					obj.boundingBoxShadow.box.min.z = -obj.modelHeight;
				}
			};

			let _label: any;
			// added property for wireframes state
			Object.defineProperty(obj, 'label', {
				get() {
					return _label;
				},
				set(value) {
					_label = value;
				},
			});

			let _tooltip: any;
			// added property for simulated tooltip
			Object.defineProperty(obj, 'tooltip', {
				get() {
					return _tooltip;
				},
				set(value) {
					_tooltip = value;
				},
			});

			// added property to redefine visible, including the label and tooltip
			Object.defineProperty(obj, 'visibility', {
				get() {
					return obj.visible;
				},
				set(value) {
					let _value = value;
					if (value === 'visible' || value === true) {
						_value = true;
						if (obj.label) obj.label.visible = _value;
					} else if (value === 'none' || value === false) {
						_value = false;
						if (obj.label && obj.label.alwaysVisible) obj.label.visible = _value;
						if (obj.tooltip) obj.tooltip.visible = _value;
					} else return;
					if (obj.visible !== _value) {
						obj.visible = _value;

						if (obj.model) {
							obj.model.traverse(c => {
								if (c.type === 'Mesh' || c.type === 'SkinnedMesh') {
									if (_value) {
										c.layers.enable(0); // this makes the meshes visible for raycast
									} else {
										c.layers.disable(0); // this makes the meshes invisible for raycast
									}
								}
								if (c.type === 'LineSegments') {
									c.layers.disableAll();
								}
							});
						}
					}
				},
			});

			// add CSS2 label method
			obj.addLabel = (element: HTMLElement, visible = false) => {
				if (element) {
					// we add it to the first children to get same boxing and position
					// obj.children[0].add(obj.drawLabel(text, height));
					obj.children[0].add(obj.drawLabelHTML(element, visible));
				}
			};

			// draw label method can be invoked separately
			obj.drawLabelHTML = (element: HTMLElement, visible = false) => {
				const div = _self.drawLabelHTML(element, _self.defaults.label.cssClass);
				const size = obj.getSize();
				obj.label = new CSS2DObject(div);
				obj.label.position.set(-size.x / 2, -size.y / 2, -size.z / 2);
				obj.label.visible = visible;
				obj.label.alwaysVisible = visible;
				return obj.label;
			};

			// add tooltip method
			obj.addTooltip = (tooltipText: string, mapboxStyle = false, center = { x: 0, y: 0, z: 0 }) => {
				if (tooltipText) {
					const divToolTip = _self.drawTooltip(tooltipText, mapboxStyle);
					const size = obj.getSize();
					if (obj.tooltip) {
						obj.tooltip.remove();
						obj.tooltip = null;
					}
					obj.tooltip = new CSS2DObject(divToolTip);
					obj.tooltip.position.set(size.x * center.x, size.y * center.y, size.z); // top-centered
					obj.tooltip.visible = false; // only visible on mouseover or selected
					// we add it to the first children to get same boxing and position
					obj.children[0].add(obj.tooltip);
				}
			};

			let _wireframe = false;
			// added property for wireframes state
			Object.defineProperty(obj, 'wireframe', {
				get() {
					return _wireframe;
				},
				set(value) {
					if (_wireframe !== value) {
						obj.model.traverse((c: any) => {
							if (c.type === 'Mesh' || c.type === 'SkinnedMesh') {
								let arrMaterial = [];
								if (!Array.isArray(c.material)) {
									arrMaterial.push(c.material);
								} else {
									arrMaterial = c.material;
								}
								arrMaterial.forEach((m: any) => {
									m.opacity = value ? 0.5 : 1;
									//m.transparent = value;
									m.wireframe = value;
								});
								if (value) {
									c.layers.disable(0);
									c.layers.enable(1);
								} else {
									c.layers.disable(1);
									c.layers.enable(0);
								}
							}
							if (c.type === 'LineSegments') {
								c.layers.disableAll();
							}
						});
						_wireframe = value;
						// Dispatch new event WireFramed
						obj.dispatchEvent({
							type: 'changed.wireframe',
						});
					}
				},
			});

			let _selected = false;
			// added property for selected state
			Object.defineProperty(obj, 'selected', {
				get() {
					return _selected;
				},
				set(value) {
					if (value) {
						if (obj.boundingBox) {
							obj.boundingBox.material = _self.defaults.materials.boxSelectedMaterial;
							obj.boundingBox.parent.visible = true;
							obj.boundingBox.layers.enable(1);
							obj.boundingBoxShadow.layers.enable(1);
						}
						if (obj.label && !obj.label.alwaysVisible) obj.label.visible = true;
					} else {
						if (obj.boundingBox) {
							obj.boundingBox.parent.visible = false;
							obj.boundingBox.layers.disable(1);
							obj.boundingBoxShadow.layers.disable(1);
							obj.boundingBox.material = _self.defaults.materials.boxNormalMaterial;
						}
						if (obj.label && !obj.label.alwaysVisible) obj.label.visible = false;
					}
					if (obj.tooltip) obj.tooltip.visible = value;
					// only fire the event if value is different
					if (_selected !== value) {
						_selected = value;
						// Dispatch new event SelectedChange
						obj.dispatchEvent({
							type: 'changed.selected',
						});
					}
				},
			});

			let _hover = false;
			// added property for hover state
			Object.defineProperty(obj, 'hover', {
				get() {
					return _hover;
				},
				set(value) {
					if (value) {
						if (!obj.selected) {
							if (obj.boundingBox) {
								obj.boundingBox.material = _self.defaults.materials.boxOverMaterial;
								obj.boundingBox.parent.visible = true;
								obj.boundingBox.layers.enable(1);
								obj.boundingBoxShadow.layers.enable(1);
							}
						}
						if (obj.label && !obj.label.alwaysVisible) {
							obj.label.visible = true;
						}
						// Dispatch new event ObjectOver
						obj.dispatchEvent({
							type: 'object.mouseover',
						});
					} else {
						if (!obj.selected) {
							if (obj.boundingBox) {
								obj.boundingBox.parent.visible = false;
								obj.boundingBox.layers.disable(1);
								obj.boundingBoxShadow.layers.disable(1);
								obj.boundingBox.material = _self.defaults.materials.boxNormalMaterial;
							}
							if (obj.label && !obj.label.alwaysVisible) {
								obj.label.visible = false;
							}
						}
						// Dispatch new event ObjectOver
						obj.dispatchEvent({
							type: 'object.mouseout',
						});
					}
					if (obj.tooltip) {
						obj.tooltip.visible = value || obj.selected;
					}
					_hover = value;
				},
			});

			// get the object model Box3 in runtime
			obj.box3 = () => {
				// update Matrix and MatrixWorld to avoid issues with transformations not full applied
				obj.updateMatrix();
				obj.updateWorldMatrix(true, true);
				// obj.updateMatrixWorld(true, true);
				let bounds;
				// clone also the model inside it's the one who keeps the real size
				if (obj.model) {
					// let's clone the object before manipulate it
					const dup = obj.clone(true) as ThreeboxObject;
					dup.model = obj.model.clone();
					// get the size of the model because the object is translated and has boundingBoxShadow
					bounds = new Box3().setFromObject(dup.model);
					// if the object has parent it's already in the added to world so it's scaled and it could be rotated
					if (obj.parent) {
						// first, we return the object to it's original position of rotation, extract rotation and apply inversed
						const rm = new Matrix4();
						const rmi = new Matrix4();
						obj.matrix.extractRotation(rm);
						rm.getInverse(rmi);
						dup.setRotationFromMatrix(rmi);
						// now the object inside will give us a NAABB Non-Axes Aligned Bounding Box
						bounds = new Box3().setFromObject(dup.model);
					}
				}
				return bounds;
			};

			// modelBox
			obj.modelBox = () => {
				return obj.box3();
			};

			obj.getSize = () => {
				return obj.box3().getSize(new Vector3(0, 0, 0));
			};

			// [jscastro]
			let _modelSize: Vector3 = null;
			// added property for wireframes state
			Object.defineProperty(obj, 'modelSize', {
				get() {
					_modelSize = obj.getSize();
					return _modelSize;
				},
				set(value) {
					if (_modelSize != value) {
						_modelSize = value;
					}
				},
			});

			// [jscastro]
			obj.modelHeight = 0;
		}

		obj.add = () => {
			_self.threebox.add(obj);
			if (!isStatic) obj.set({ position: obj.coordinates });
			return obj;
		};

		obj.remove = () => {
			_self.threebox.remove(obj);
			_self.threebox.map.repaint = true;
		};

		obj.duplicate = () => {
			const dup = obj.clone() as ThreeboxObject;
			dup.userData = obj.userData;
			if (obj.model) {
				dup.model = obj.model.clone();
			}
			_self.addMethods(dup);
			return dup;
		};

		obj.dispose = () => {
			if (obj.label) {
				obj.label.dispose();
			}
			if (obj.tooltip) {
				obj.tooltip.dispose();
			}
			if (obj.model) {
				obj.model = null;
			}
		};

		// obj.addListener = (type: ThreeboxEventType, listener: (event: Event) => void) => {
		// 	obj.addEventListener(type, listener);
		// };

		// obj.removeListener = (type: ThreeboxEventType, listener: (event: Event) => void) => {
		// 	obj.removeEventListener(type, listener);
		// };

		return obj;
	}

	/**
	 *
	 *
	 * @author salgum1114
	 * @param {(any | any[])} obj
	 * @param {*} option
	 * @returns
	 */
	makeGroup(obj: any | any[], option: any) {
		const geoGroup = new Group();
		geoGroup.userData = option || {};
		geoGroup.userData.isGeoGroup = true;
		if (geoGroup.userData.feature) {
			geoGroup.userData.feature.properties.uuid = geoGroup.uuid;
		}
		if (Array.isArray(obj)) {
			obj.forEach(o => geoGroup.add(o));
		} else {
			geoGroup.add(obj);
		}
		this.threebox.utils.flipMaterialSides(obj);
		return geoGroup;
	}

	/**
	 * add tooltip method
	 *
	 * @author salgum1114
	 * @param {string} tooltipText
	 * @param {boolean} [mapboxStyle=false]
	 * @returns
	 */
	drawTooltip(tooltipText: string, mapboxStyle = false) {
		let divToolTip;
		if (tooltipText) {
			if (mapboxStyle) {
				const divContent = document.createElement('div');
				divContent.className = 'mapboxgl-popup-content';
				const strong = document.createElement('strong');
				strong.innerHTML = tooltipText;
				divContent.appendChild(strong);
				const tip = document.createElement('div');
				tip.className = 'mapboxgl-popup-tip';
				const div = document.createElement('div');
				div.className = 'marker mapboxgl-popup-anchor-bottom';
				div.appendChild(tip);
				div.appendChild(divContent);
				divToolTip = document.createElement('div');
				divToolTip.className += 'label3D';
				divToolTip.appendChild(div);
			} else {
				divToolTip = document.createElement('span');
				divToolTip.className = this.defaults.tooltip.cssClass;
				divToolTip.innerHTML = tooltipText;
			}
			return divToolTip;
		}
		return divToolTip;
	}

	/**
	 * draw label method can be invoked separately
	 *
	 * @author salgum1114
	 * @param {(HTMLElement | string)} element
	 * @param {string} cssClass
	 * @returns
	 */
	drawLabelHTML(element: HTMLElement | string, cssClass: string) {
		const div = document.createElement('div');
		div.className += cssClass;
		// create a div [TODO] analize if must be moved
		if (typeof element === 'string') {
			div.innerHTML = element;
		} else {
			div.innerHTML = element.outerHTML;
		}
		return div;
	}
}

export default ObjectHandler;
