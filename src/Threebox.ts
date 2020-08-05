import {
	GammaEncoding,
	Scene,
	PerspectiveCamera,
	WebGLRenderer,
	Raycaster,
	Group,
	TextureEncoding,
	AmbientLight,
	Color,
	DirectionalLight,
	Object3D,
	Vector2,
	Mesh,
	Loader,
	Clock,
	AnimationMixer,
	Box3Helper,
	Box3,
	Vector3,
	Intersection,
	Event,
} from 'three';
import mapboxgl from 'mapbox-gl';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { ColladaLoader } from 'three/examples/jsm/loaders/ColladaLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer';

import CameraSync from './CameraSync';
import Constant from './Constant';
import Utils from './Utils';
import Material from './Material';
import { EventHandler, ObjectHandler, AnimationHandler } from './handlers';

export type ThreeboxOption = {
	/**
	 * @default THREE.GammaEncoding
	 * @type {TextureEncoding}
	 */
	outputEncoding?: TextureEncoding;
	/**
	 * @default 2
	 * @type {number}
	 */
	gammaFactor?: number;
	/**
	 * Whether using map trigger paint
	 *
	 * @type {boolean}
	 */
	passiveRendering?: boolean;
	/**
	 * Whether using default lights on scene
	 *
	 * @type {boolean}
	 */
	useDefaultLights?: boolean;
	/**
	 * Whether using tooltip at hover
	 *
	 * @type {boolean}
	 */
	useTooltip?: boolean;
	/**
	 * Whether using hovering object and feature
	 *
	 * @type {boolean}
	 */
	useHover?: boolean;
	/**
	 * Whether using selecting object3D
	 *
	 * @type {boolean}
	 */
	useSelectingObjects?: boolean;
	/**
	 * Whether using selecting map 3d buildings feature
	 *
	 * @type {boolean}
	 */
	useSelectingFeatures?: boolean;
	/**
	 * Whether using rotating object3D
	 *
	 * @type {boolean}
	 */
	useRotatingObjects?: boolean;
	/**
	 * Whether using dragging object3D
	 *
	 * @type {boolean}
	 */
	useDraggingObjects?: boolean;
};

export type LoadModelType = 'gltf' | 'obj' | 'fbx' | 'dae';

export interface LoadModelOption {
	/**
	 * Model url
	 *
	 * @type {string}
	 */
	url: string;
	/**
	 * MTL url
	 *
	 * @type {string}
	 */
	mtl?: string;
	/**
	 * Load model type
	 *
	 * @type {LoadModelType}
	 */
	type: LoadModelType;
	/**
	 * @default meters
	 * @type {('scene' | 'meters')}
	 */
	units?: 'scene' | 'meters';
	/**
	 * @default 1
	 * @type {number}
	 */
	scale?: number;
	/**
	 * @default { x: 90, y: 0, z: 0 }
	 * @type {(number | { x: number; y: number; z: number })}
	 */
	rotation?: number | { x: number; y: number; z: number };
	/**
	 * @default 1
	 * @type {number}
	 */
	defaultAnimation?: number;
	/**
	 * @default { x: 0, y: 0, z: 0 }
	 * @type {{ x: number; y: number; z: number }}
	 */
	adjustment?: { x: number; y: number; z: number };
	/**
	 * @default false
	 * @type {boolean}
	 */
	normalize?: boolean;
}

export type ThreeboxEventType =
	| 'changed.wireframe'
	| 'changed.selected'
	| 'changed.isPlyaing'
	| 'object.dragged'
	| 'object.mouseover'
	| 'object.mouseout';

export interface ThreeboxObject extends Omit<Object3D, 'add' | 'remove'> {
	isPlaying?: boolean;
	animationQueue?: any[];
	animationMethod?: any;
	clock?: Clock;
	hasDefaultAnimation?: boolean;
	defaultAction?: any;
	actions?: any[];
	mixer?: AnimationMixer;
	animations?: any[];
	/**
	 * @example [Longitude, Latitude, Altitude?]
	 * @type {number[]}
	 */
	coordinates?: number[];
	modelHeight?: number;
	modelSize?: Vector3;
	boundingBox?: Box3Helper;
	boundingBoxShadow?: Box3Helper;
	label?: CSS2DObject & { alwaysVisible?: boolean; dispose?: () => void };
	tooltip?: any;
	visibility?: boolean;
	model?: Group;
	wireframe?: boolean;
	selected?: boolean;
	hover?: boolean;
	set?: (option: any) => void;
	playDefault?: (option: any) => void;
	playAnimation?: (option: any) => void;
	pauseAllActions?: () => void;
	resumeAllActions?: () => void;
	stop?: (index?: number) => void;
	deactivateAllActions?: () => void;
	activateAllActions?: () => void;
	idle?: () => void;
	followPath?: (option: any, callback?: any) => void;
	setObject?: (option: any) => void;
	/**
	 * @param lnglat [Longitude, Latitude, Altitude?]
	 */
	setCoords?: (lnglat: number[]) => void;
	setBoundingBoxShadowFloor?: () => void;
	/**
	 * @param lnglat [Longitude, Latitude, Altitude?]
	 */
	setTranslate?: (lnglat: number[]) => void;
	setRotation?: (xyz: number | { x?: number; y?: number; z: number }) => void;
	setRotationAxis?: (xyz: number | { x?: number; y?: number; z: number }) => void;
	/**
	 * @param lnglat [Longitude, Latitude, Altitude?]
	 * @param xyz
	 * @param inverse
	 */
	calcAdjustedPosition?: (lnglat: number[], xyz: { x: number; y: number; z: number }, inverse?: boolean) => void;
	drawBoundingBox?: () => Group;
	addLabel?: (element: HTMLElement, visible?: boolean) => void;
	drawLabelHTML?: (element: HTMLElement, visible?: boolean) => CSS2DObject;
	addTooltip?: (text: string, mapboxStyle?: boolean, center?: { x: number; y: number; z: number }) => void;
	box3?: () => Box3;
	modelBox?: () => Box3;
	getSize?: () => Vector3;
	add?: () => void;
	remove?: () => void;
	duplicate?: () => this;
	dispose?: () => void;
	/**
	 * Adds a listener to an event type.
	 * @param {ThreeboxEventType} type The type of event to listen to.
	 * @param {(event: Event) => void} listener The function that gets called when the event is fired.
	 */
	addEventListener(type: ThreeboxEventType, listener: (event: Event) => void): void;
	/**
	 * Checks if listener is added to an event type.
	 * @param {ThreeboxEventType} type The type of event to listen to.
	 * @param {(event: Event) => void} listener The function that gets called when the event is fired.
	 */
	hasEventListener(type: ThreeboxEventType, listener: (event: Event) => void): boolean;
	/**
	 * Removes a listener from an event type.
	 * @author salgum1114
	 * @param {ThreeboxEventType} type The type of the listener that gets removed.
	 * @param {(event: Event) => void} listener The listener function that gets removed.
	 */
	removeEventListener(type: ThreeboxEventType, listener: (event: Event) => void): void;
	/**
	 * Fire an event type.
	 * @param type The type of event that gets fired.
	 */
	dispatchEvent(event: { type: ThreeboxEventType; [attachment: string]: any }): void;
}

export const ThreeboxDefaultOption: ThreeboxOption = {
	outputEncoding: GammaEncoding,
	gammaFactor: 2,
	passiveRendering: true,
	useDefaultLights: true,
	useTooltip: false,
	useHover: false,
	useSelectingObjects: false,
	useSelectingFeatures: false,
	useRotatingObjects: false,
	useDraggingObjects: false,
};

export const LoadModelDefaultOption: LoadModelOption = {
	url: null,
	type: null,
	units: 'meters',
	scale: 1,
	rotation: { x: 90, y: 0, z: 0 },
	defaultAnimation: 0,
	adjustment: { x: 0, y: 0, z: 0 },
	normalize: false,
};

class Threebox {
	version = VERSION;
	map: mapboxgl.Map;
	gl: WebGLRenderingContext;
	scene: Scene;
	camera: PerspectiveCamera;
	renderer: WebGLRenderer;
	raycaster: Raycaster;
	world: Group;
	objectsCache: any[];
	cameraSync: CameraSync;
	labelRenderer: any;

	// Threebox options
	option: ThreeboxOption;
	useTooltip?: boolean;
	useDefaultLights?: boolean;
	useHover?: boolean;
	useSelectingObjects?: boolean;
	useSelectingFeatures?: boolean;
	useRotatingObjects?: boolean;
	useDraggingObjects?: boolean;

	// Threebox utils
	utils: typeof Utils = Utils;
	material: typeof Material;
	events: EventHandler;
	objects: ObjectHandler;
	animations: AnimationHandler;

	/**
	 * Creates an instance of Threebox.
	 * @author salgum1114
	 * @param {mapboxgl.Map} map
	 * @param {WebGLRenderingContext} gl
	 * @param {ThreeboxOption} [option]
	 */
	constructor(map: mapboxgl.Map, gl: WebGLRenderingContext, option?: ThreeboxOption) {
		this.map = map;
		this.gl = gl;

		// apply start option
		this.option = this.utils.validate(option || {}, ThreeboxDefaultOption);

		this.material = Material;
		this.objects = new ObjectHandler(this, map);
		this.events = new EventHandler(this, map);
		this.animations = new AnimationHandler(this, map);

		// Set up WebGLRenderer
		this.renderer = new WebGLRenderer({
			canvas: map.getCanvas(),
			antialias: true,
			context: gl,
		});
		this.renderer.setPixelRatio(globalThis.devicePixelRatio);
		this.renderer.setSize(map.getCanvas().clientWidth, map.getCanvas().clientHeight);
		this.renderer.autoClear = false;
		this.renderer.outputEncoding = option?.outputEncoding || GammaEncoding;
		this.renderer.gammaFactor = option?.gammaFactor || 2;

		// set labelRendered
		// this.labelRenderer = new LabelRenderer(this.map);

		// create Scene
		this.scene = new Scene();

		// create Perspective camera
		this.camera = new PerspectiveCamera(
			Constant.FOV_DEGREES,
			map.getCanvas().clientWidth / map.getCanvas().clientHeight,
			1,
			1e21,
		);
		this.camera.layers.enable(0);
		this.camera.layers.enable(1);

		// The CameraSync object will keep the Mapbox and THREE.js camera movements in sync.
		// It requires a world group to scale as we zoom in. Rotation is handled in the camera's
		// projection matrix itself (as is field of view and near/far clipping)
		// It automatically registers to listen for move events on the map so we don't need to do that here
		this.world = new Group();
		this.scene.add(this.world);
		this.objectsCache = [];
		this.cameraSync = new CameraSync(this.map, this.camera, this.world);

		// raycaster for mouse events
		this.raycaster = new Raycaster();
		this.raycaster.layers.set(0);

		// set up event option
		this.setEventOption(this.option);

		// create default lights
		this.defaultLights();
	}

	setEventOption(option: ThreeboxOption) {
		this.useDefaultLights = this.option.useDefaultLights;
		this.useTooltip = option.useTooltip;
		this.useHover = option.useHover;
		this.useSelectingFeatures = option.useSelectingFeatures;
		this.useSelectingObjects = option.useSelectingObjects;
		this.useDraggingObjects = option.useDraggingObjects;
	}

	/**
	 *
	 *
	 * @author salgum1114
	 */
	defaultLights() {
		if (this.useDefaultLights) {
			const ambientLight = new AmbientLight(new Color('hsl(0, 0%, 100%)'), 0.75);
			this.scene.add(ambientLight);

			const directionalLightBack = new DirectionalLight(new Color('hsl(0, 0%, 100%)'), 0.25);
			directionalLightBack.position.set(10, 100, 100);
			this.scene.add(directionalLightBack);

			const directionalLightFront = new DirectionalLight(new Color('hsl(0, 0%, 100%)'), 0.25);
			directionalLightFront.position.set(-10, -100, 100);
			this.scene.add(directionalLightFront);
		}
	}

	/**
	 *
	 *
	 * @author salgum1114
	 * @returns
	 */
	memory() {
		return this.renderer.info.memory;
	}

	/**
	 *
	 *
	 * @author salgum1114
	 * @returns
	 */
	programs() {
		return this.renderer.info.programs.length;
	}

	/**
	 *
	 *
	 * @author salgum1114
	 * @param {[number, number, number]} coords
	 * @returns
	 */
	projectToWorld(coords: [number, number, number]) {
		return this.utils.projectToWorld(coords);
	}

	/**
	 *
	 *
	 * @author salgum1114
	 * @param {{ x: number; y: number; z: number }} v3
	 * @returns
	 */
	unprojectFromWorld(v3: { x: number; y: number; z: number }) {
		return this.utils.unprojectFromWorld(v3);
	}

	/**
	 *
	 *
	 * @author salgum1114
	 * @param {number} lat
	 * @returns
	 */
	projectedUnitsPerMeter(lat: number) {
		return this.utils.projectedUnitsPerMeter(lat);
	}

	/**
	 * get the center point of a feature
	 *
	 * @author salgum1114
	 * @param {GeoJSON.Feature<any>} feature
	 * @param {ThreeboxObject} obj
	 * @param {number} level
	 * @returns
	 */
	getFeatureCenter(feature: GeoJSON.Feature<any>, obj?: ThreeboxObject, level?: number) {
		return this.utils.getFeatureCenter(feature, obj, level);
	}

	/**
	 *
	 *
	 * @author salgum1114
	 * @param {GeoJSON.Feature<any>} feature
	 * @param {ThreeboxObject} [obj]
	 * @param {number} [level]
	 * @returns
	 */
	getObjectHeightOnFloor(feature: GeoJSON.Feature<any>, obj?: ThreeboxObject, level?: number) {
		return this.utils.getObjectHeightOnFloor(feature, obj, level);
	}

	/**
	 *
	 *
	 * @author salgum1114
	 * @param {mapboxgl.Point} point
	 * @returns
	 */
	queryRenderedFeatures(point: mapboxgl.Point) {
		const map = this.map as any;
		const mouse = new Vector2();

		// // scale mouse pixel position to a percentage of the screen's width and height
		mouse.x = (point.x / map.transform.width) * 2 - 1;
		mouse.y = 1 - (point.y / map.transform.height) * 2;

		this.raycaster.setFromCamera(mouse, this.camera);

		// calculate objects intersecting the picking ray
		const intersects = this.raycaster.intersectObjects(this.world.children, true);

		return intersects;
	}

	/**
	 * find 3D object of a mesh. this method is needed to know the object of a raycasted mesh
	 *
	 * @author salgum1114
	 * @param {Intersection} mesh
	 * @returns
	 */
	findParent3DObject(mesh: Intersection) {
		// find the Parent Object3D of the mesh captured by Raytracer
		let result: ThreeboxObject;
		mesh.object.traverseAncestors((m: Object3D) => {
			if (m.parent) {
				if (m.parent.type === 'Group' && m.userData.url) {
					result = m as ThreeboxObject;
				}
			}
		});
		return result;
	}

	/**
	 * method to replicate behaviour of map.setLayoutProperty when Threebox are affected
	 *
	 * @author salgum1114
	 * @param {string} layerId
	 * @param {string} name
	 * @param {*} value
	 * @returns
	 */
	setLayoutProperty(layerId: string, name: string, value: any) {
		// first set layout property at the map
		this.map.setLayoutProperty(layerId, name, value);
		if (value !== null && value !== undefined) {
			if (name === 'visibility') {
				this.world.children.forEach((obj: any) => {
					if (obj.userData.feature && obj.userData.feature.layer === layerId) {
						obj.visibility = value;
					}
				});
				return;
			}
		}
	}

	/**
	 * Custom Layers doesn't work on minzoom and maxzoom attributes, and if the layer is including labels they don't hide either on minzoom
	 *
	 * @author salgum1114
	 * @param {string} layer3d
	 * @param {number} minZoomLayer
	 * @param {number} maxZoomLayer
	 */
	setLayerZoomRange(layer3d: string, minZoomLayer: number, maxZoomLayer: number) {
		if (this.map.getLayer(layer3d)) {
			this.map.setLayerZoomRange(layer3d, minZoomLayer, maxZoomLayer);
			this.setLabelZoomRange(minZoomLayer, maxZoomLayer);
		}
	}

	/**
	 * method to set the height of all the objects in a level. this only works if the objects have a geojson feature
	 *
	 * @author salgum1114
	 * @param {string} layerId
	 * @param {number} level
	 * @returns
	 */
	setLayerHeigthProperty(layerId: string, level: number) {
		const map = this.map as any;
		const layer = map.getLayer(layerId);
		if (!layer) return;
		if (layer.type === 'fill-extrusion') {
			const data = map.getStyle().sources[layer.source].data;
			const features = data.features as GeoJSON.Feature<any>[];
			features.forEach(f => {
				f.properties.level = level;
			});
			// we change the level on the source
			map.getSource(layer.source as any).setData(data);
		} else if (layer.type === 'custom') {
			this.world.children.forEach((obj: any) => {
				const feature = obj.userData.feature;
				if (feature && feature.layer === layerId) {
					// TODO...
					// this could be a multidimensional array
					const location = this.utils.getFeatureCenter(feature, obj, level);
					obj.setCoords(location);
				}
			});
		}
	}

	/**
	 * method to toggle Layer visibility
	 *
	 * @author salgum1114
	 * @param {string} layerId
	 * @param {boolean} visible
	 */
	toggleLayer(layerId: string, visible: boolean) {
		if (this.map.getLayer(layerId)) {
			this.setLayoutProperty(layerId, 'visibility', visible ? 'visible' : 'none');
		}
	}

	/**
	 * method set the CSS2DObjects zoom range and hide them at the same time the layer is
	 *
	 * @deprecated
	 * @author salgum1114
	 * @param {number} minZoom
	 * @param {number} maxZoom
	 */
	setLabelZoomRange(minZoom: number, maxZoom: number) {
		console.warn('[DEPRECATED] Not used', minZoom, maxZoom);
		// this.labelRenderer.setZoomRange(minZoom, maxZoom);
	}

	/**
	 * Update scene
	 *
	 * @author salgum1114
	 */
	update() {
		if (this.map.repaint) {
			this.map.repaint = false;
		}

		const timestamp = Date.now();

		// Update any animations
		this.animations.update(timestamp);

		this.renderer.state.reset();

		// Render the scene and repaint the map
		this.renderer.render(this.scene, this.camera);

		// Render any label
		// this.labelRenderer.render(this.scene, this.camera);

		if (this.option.passiveRendering === false) {
			this.map.triggerRepaint();
		}
	}

	add(obj: any) {
		// remove the tooltip if not enabled
		if (!this.useTooltip && obj.tooltip) {
			obj.tooltip.visibility = false;
		}
		this.world.add(obj);
	}

	remove(obj: any) {
		// remove also the label if exists dispatching the event removed to fire CSS2DRenderer "removed" listener
		if (obj.label) {
			obj.label.remove();
		}
		if (obj.tooltip) {
			obj.tooltip.remove();
		}
		this.world.remove(obj);
	}

	/**
	 * method to fully dispose the resources, watch out is you call this without navigating to other page
	 *
	 * @author salgum1114
	 * @returns
	 */
	dispose() {
		console.log(this.memory());
		return new Promise<boolean>(resolve => {
			this.world.traverse((obj: any) => {
				if (obj.geometry) {
					obj.geometry.dispose();
				}
				if (obj.material) {
					if (obj.material instanceof Mesh) {
						obj.material.materials.forEach((m: any) => {
							m.dispose();
							if (m.map) {
								m.map.dispose();
							}
						});
					} else {
						obj.material.dispose();
					}

					const m = obj.material;
					const md =
						m.map ||
						m.alphaMap ||
						m.aoMap ||
						m.bumpMap ||
						m.displacementMap ||
						m.emissiveMap ||
						m.envMap ||
						m.lightMap ||
						m.metalnessMap ||
						m.normalMap ||
						m.roughnessMap;
					if (md) {
						if (m.map) {
							m.map.dispose();
						}
						if (m.alphaMap) {
							m.alphaMap.dispose();
						}
						if (m.aoMap) {
							m.aoMap.dispose();
						}
						if (m.bumpMap) {
							m.bumpMap.dispose();
						}
						if (m.displacementMap) {
							m.displacementMap.dispose();
						}
						if (m.emissiveMap) {
							m.emissiveMap.dispose();
						}
						if (m.envMap) {
							m.envMap.dispose();
						}
						if (m.lightMap) {
							m.lightMap.dispose();
						}
						if (m.metalnessMap) {
							m.metalnessMap.dispose();
						}
						if (m.normalMap) {
							m.normalMap.dispose();
						}
						if (m.roughnessMap) {
							m.roughnessMap.dispose();
						}
					}
				}
				if (obj.dispose) {
					obj.dispose();
				}
			});
			// this.map.remove();
			// this.map = {};
			this.scene.remove(this.world);
			this.scene.dispose();
			this.world.children = [];
			this.world = null;
			// this.labelRenderer.dispose();
			console.log(this.memory());
			this.renderer.dispose();
			resolve(true);
		});
	}

	async loadModel(option: LoadModelOption) {
		if (!option.type) {
			console.warn('[WARNING] Required type option', option);
			return Promise.reject();
		}
		const _option = this.utils.validate(option, LoadModelDefaultOption) as LoadModelOption;
		let loader: Loader;
		// support other models
		switch (_option.type) {
			case 'obj':
				// TODO: Support formats other than OBJ/MTL
				loader = new OBJLoader();
				break;
			case 'gltf':
				// Support for GLTF
				loader = new GLTFLoader();
				break;
			case 'fbx':
				loader = new FBXLoader();
				break;
			case 'dae':
				loader = new ColladaLoader();
				break;
		}

		if (_option.type === 'obj') {
			const mtlLoader = new MTLLoader();
			const materials = (await mtlLoader.loadAsync(_option.mtl)) as MTLLoader.MaterialCreator;
			if (materials && _option.type === 'obj') {
				materials.preload();
				const objLoader = loader as OBJLoader;
				objLoader.setMaterials(materials);
			}
		}

		const obj = await loader.loadAsync(_option.url);
		let group: Group = obj;
		// MTL/GLTF/FBX models have a different structure
		let animations;
		switch (_option.type) {
			case 'obj':
				group = obj.children[0];
				break;
			case 'gltf':
			case 'dae':
				animations = obj.animations;
				group = obj.scene;
				break;
			case 'fbx':
				animations = obj.animations;
				break;
		}

		// options.rotation was wrongly used
		const r = this.utils.rotation(_option.rotation, [0, 0, 0]) as number[];
		const s = this.utils.scale(_option.scale, [1, 1, 1]);
		group.rotation.set(r[0], r[1], r[2]);
		group.scale.set(s[0], s[1], s[2]);
		// normalize specular/metalness/shininess from meshes in FBX and GLB model as it would need 5 lights to illuminate them properly
		if (_option.normalize) {
			normalizeSpecular(group);
		}

		const projScaleGroup = new Group();
		projScaleGroup.add(group);
		const userScaleGroup = this.objects.makeGroup(projScaleGroup, _option) as any;
		userScaleGroup.model = group;
		// assign the animations to the userScaleGroup before enrolling it in AnimationsManager through _addMethods
		userScaleGroup.animations = animations;

		this.objects.addMethods(userScaleGroup);

		// if the object options have an adjustment to center the 3D Object
		const center = _option.adjustment;
		if (center) {
			const size = userScaleGroup.getSize();
			group.position.set(size.x * center.x, size.y * center.y, size.z * center.z);
		}

		// after adding methods create the bounding box at userScaleGroup but add it to its children for positioning
		const boxGrid = userScaleGroup.drawBoundingBox();
		projScaleGroup.add(boxGrid);

		// we add by default a tooltip that can be override later or hide it with threebox `enableTooltips`
		userScaleGroup.addTooltip(userScaleGroup.uuid, true, center);

		// initialize the default animation to avoid issues with position
		userScaleGroup.idle();

		// some FBX/GLTF models have too much specular effects for mapbox
		function normalizeSpecular(model: any) {
			model.traverse((c: any) => {
				if (c.isMesh) {
					let specularColor;
					if (c.material.type === 'MeshStandardMaterial') {
						if (c.material.metalness) {
							c.material.metalness *= 0.1;
						}
						if (c.material.glossiness) {
							c.material.glossiness *= 0.25;
						}
						specularColor = new Color(12, 12, 12);
					} else if (c.material.type === 'MeshPhongMaterial') {
						c.material.shininess = 0.1;
						specularColor = new Color(20, 20, 20);
					}
					if (c.material.specular && c.material.specular.isColor) {
						c.material.specular = specularColor;
					}
				}
			});
		}

		return userScaleGroup as ThreeboxObject;
	}
}

export default Threebox;
