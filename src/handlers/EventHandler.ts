import { Intersection } from 'three';
import mapboxgl from 'mapbox-gl';

import Threebox, { ThreeboxObject } from '../Threebox';

export type DragActionType = 'translate' | 'rotate';

class EventHandler {
	threebox: Threebox;
	map: mapboxgl.Map;
	canvas: HTMLElement;

	selectedObject: ThreeboxObject; // selected object through click
	draggedObject: ThreeboxObject; // dragged object through mousedown + mousemove
	draggedAction: DragActionType; // dragged action to notify frontend
	overedObject: ThreeboxObject; // overed object through mouseover

	overedFeature: mapboxgl.MapboxGeoJSONFeature; // overed state for extrusion layer features
	selectedFeature: mapboxgl.MapboxGeoJSONFeature; // selected state id for extrusion layer features

	// Variable to hold the starting xy coordinates
	// when 'mousedown' occured.
	start: mapboxgl.Point;
	rotationStep = 10; // degrees step size for rotation
	gridStep = 6; // decimals to adjust the lnglat

	// when object selected
	startCoords: number[] = [];

	// Variable to hold the current xy coordinates
	// when 'mousemove' or 'mouseup' occurs.
	// current;

	// Variable for the draw box element.
	// box;
	lngDiff: number; // difference between cursor and model left corner
	latDiff: number; // difference between cursor and model bottom corner

	constructor(threebox: Threebox, map: mapboxgl.Map) {
		this.threebox = threebox;
		this.map = map;
		this.canvas = map.getCanvasContainer();
		this.canvas.style.cursor = '';
		this.attachEvent();
	}

	public dispose = () => {
		this.map.off('mousedown', this.handleMouseDown);
		this.map.off('mouseout', this.handleMouseOut);
		this.map.off('mousemove', this.handleMouseMove);
		this.map.off('click', this.handleClick);
	};

	private attachEvent = () => {
		this.map.on('mousedown', this.handleMouseDown);
		this.map.on('mouseout', this.handleMouseOut);
		this.map.on('mousemove', this.handleMouseMove);
		this.map.on('click', this.handleClick);
	};

	// Return the xy coordinates of the mouse position
	private mousePos(e: mapboxgl.MapMouseEvent & mapboxgl.EventData) {
		const rect = this.canvas.getBoundingClientRect();
		return new mapboxgl.Point(
			e.originalEvent.clientX - rect.left - this.canvas.clientLeft,
			e.originalEvent.clientY - rect.top - this.canvas.clientTop,
		);
	}

	private unselectFeature(point: mapboxgl.Point, feature: mapboxgl.MapboxGeoJSONFeature) {
		if (typeof feature.id === 'undefined') {
			return;
		}
		this.map.setFeatureState(
			{ source: feature.source, sourceLayer: feature.sourceLayer, id: feature.id },
			{ select: false },
		);
		this.removeTooltip(feature);
		feature = this.map.queryRenderedFeatures(point, {
			layers: [feature.layer.id],
			filter: ['==', ['id'], feature.id],
		})[0];
		// Dispatch new event f for unselected
		if (feature) {
			this.map.fire('SelectedFeatureChange', { detail: feature });
		}
		this.selectedFeature = null;
	}

	private selectFeature(point: mapboxgl.Point, feature: mapboxgl.MapboxGeoJSONFeature) {
		this.selectedFeature = feature;
		this.map.setFeatureState(
			{
				source: this.selectedFeature.source,
				sourceLayer: this.selectedFeature.sourceLayer,
				id: this.selectedFeature.id,
			},
			{ select: true },
		);
		this.selectedFeature = this.map.queryRenderedFeatures(point, {
			layers: [this.selectedFeature.layer.id],
			filter: ['==', ['id'], this.selectedFeature.id],
		})[0];
		this.addTooltip(this.selectedFeature);
		// Dispatch new event SelectedFeature for selected
		this.map.fire('SelectedFeatureChange', { detail: this.selectedFeature });
	}

	private unoverFeature(feature: mapboxgl.MapboxGeoJSONFeature) {
		if (this.overedFeature && typeof this.overedFeature !== 'undefined' && this.overedFeature.id !== feature.id) {
			// if (overedFeature && typeof overedFeature !== 'undefined' && overedFeature.id != f) {
			this.map.setFeatureState(
				{
					source: this.overedFeature.source,
					sourceLayer: this.overedFeature.sourceLayer,
					id: this.overedFeature.id,
				},
				{ hover: false },
			);
			this.removeTooltip(this.overedFeature);
			this.overedFeature = null;
		}
	}

	private unselectObject(object: ThreeboxObject) {
		// deselect, reset and return
		object.selected = false;
		this.selectedObject = null;
	}

	private addTooltip(_feature: mapboxgl.MapboxGeoJSONFeature) {
		// if (!this.threebox.useTooltip) {
		// 	return;
		// }
		// const coordinates = this.threebox.getFeatureCenter(feature);
		// const tooltipObj = this.threebox.tooltip({
		// 	text: feature.properties.name || feature.id || feature.type,
		// 	mapboxStyle: true,
		// 	feature,
		// });
		// tooltipObj.setCoords(coordinates);
		// this.threebox.add(tooltipObj);
		// tooltipObj.tooltip = tooltipObj;
		// tooltipObj.tooltip.tooltip.visible = true;
	}

	private removeTooltip = (_feature: mapboxgl.MapboxGeoJSONFeature) => {
		// if (feature.tooltip) {
		// 	feature.tooltip.visibility = false;
		// 	this.threebox.remove(feature.tooltip);
		// 	feature.tooltip = null;
		// }
	};

	private handleClick = (e: mapboxgl.MapMouseEvent & mapboxgl.EventData) => {
		let intersectionExists;
		let intersects: Intersection[] = [];
		if (this.threebox.useSelectingObjects) {
			// raycast only if we are in a custom layer, for other layers go to the else, this avoids duplicated calls to raycaster
			intersects = this.threebox.queryRenderedFeatures(e.point);
		}
		intersectionExists = typeof intersects[0] === 'object';
		// if intersect exists, highlight it
		if (intersectionExists) {
			const nearestObject = this.threebox.findParent3DObject(intersects[0]);
			if (nearestObject) {
				// if extrusion object selected, unselect
				if (this.selectedFeature) {
					this.unselectFeature(e.point, this.selectedFeature);
				}
				// if not selected yet, select it
				if (!this.selectedObject) {
					this.selectedObject = nearestObject;
					this.selectedObject.selected = true;
					this.threebox.emit('select', {
						type: 'object',
						target: this.selectedObject,
					});
				} else if (this.selectedObject.uuid !== nearestObject.uuid) {
					// it's a different object, restore the previous and select the new one
					this.selectedObject.selected = false;
					nearestObject.selected = true;
					this.selectedObject = nearestObject;
					this.threebox.emit('select', {
						type: 'object',
						target: this.selectedObject,
					});
				} else if (this.selectedObject.uuid === nearestObject.uuid) {
					// deselect, reset and return
					this.unselectObject(this.selectedObject);
					this.threebox.emit('select', {
						type: 'object',
						target: null,
					});
					return;
				}

				// fire the Wireframed event to notify UI status change
				this.selectedObject.dispatchEvent({ type: 'changed.wireframe' });
				this.selectedObject.dispatchEvent({
					type: 'changed.isPlyaing',
				});

				this.map.repaint = true;
				e.preventDefault();
			}
		} else {
			let features: mapboxgl.MapboxGeoJSONFeature[] = [];
			if (this.threebox.useSelectingFeatures) {
				features = this.map.queryRenderedFeatures(e.point);
			}
			// now let's check the extrusion layer objects
			if (features.length > 0) {
				if (features[0].layer.type === 'fill-extrusion' && typeof features[0].id !== 'undefined') {
					// if 3D object selected, unselect
					if (this.selectedObject) {
						this.unselectObject(this.selectedObject);
					}
					// if not selected yet, select it
					if (!this.selectedFeature) {
						this.selectFeature(e.point, features[0]);
						this.threebox.emit('select', {
							type: 'feature',
							target: this.selectedFeature,
						});
					} else if (this.selectedFeature.id !== features[0].id) {
						// it's a different feature, restore the previous and select the new one
						this.unselectFeature(e.point, this.selectedFeature);
						this.selectFeature(e.point, features[0]);
						this.threebox.emit('select', {
							type: 'feature',
							target: this.selectedFeature,
						});
					} else if (this.selectedFeature.id === features[0].id) {
						// deselect, reset and return
						this.unselectFeature(e.point, this.selectedFeature);
						this.threebox.emit('select', {
							type: 'feature',
							target: null,
						});
						return;
					}
				}
			}
		}
	};

	private handleMouseMove = (e: mapboxgl.MapMouseEvent & mapboxgl.EventData) => {
		// Capture the ongoing xy coordinates
		const current = this.mousePos(e);

		this.canvas.style.cursor = '';
		// check if being rotated
		if (e.originalEvent.altKey && this.draggedObject) {
			if (!this.threebox.useRotatingObjects) {
				return;
			}
			this.draggedAction = 'rotate';
			// Set a UI indicator for dragging.
			this.canvas.style.cursor = 'move';
			// const minX = Math.min(start.x, current.x);
			// const maxX = Math.max(start.x, current.x);
			// const minY = Math.min(start.y, current.y);
			// const maxY = Math.max(start.y, current.y);

			// set the movement fluid we rotate only every 10px moved, in steps of 10 degrees up to 360
			const rotation = {
				x: 0,
				y: 0,
				z:
					360 +
					(((Math.floor((current.x - this.start.x) / this.rotationStep) % 360) * this.rotationStep) % 360),
				// z: 360 + (((~~((current.x - start.x) / rotationStep) % 360) * rotationStep) % 360),
			};
			// now rotate the model depending the axis
			this.draggedObject.setRotation(rotation);
			// draggedObject.setRotationAxis(rotation);
			return;
		}

		// check if being moved
		if (e.originalEvent.shiftKey && this.draggedObject) {
			if (!this.threebox.useDraggingObjects) {
				return;
			}
			this.draggedAction = 'translate';
			// Set a UI indicator for dragging.
			this.canvas.style.cursor = 'move';
			// Capture the first xy coordinates, height must be the same to move on the same plane
			const coords = e.lngLat;
			const newCoords = [
				Number((coords.lng + this.lngDiff).toFixed(this.gridStep)),
				Number((coords.lat + this.latDiff).toFixed(this.gridStep)),
				this.draggedObject.modelHeight,
			];
			this.draggedObject.setCoords(newCoords);
			return;
		}

		let intersectionExists;
		let intersects: Intersection[] = [];

		if (this.threebox.useSelectingObjects) {
			// calculate objects intersecting the picking ray
			intersects = this.threebox.queryRenderedFeatures(e.point);
		}
		intersectionExists = typeof intersects[0] === 'object';

		// if intersect exists, highlight it, if not check the extrusion layer
		if (intersectionExists) {
			const nearestObject = this.threebox.findParent3DObject(intersects[0]);
			if (nearestObject) {
				this.unoverFeature(this.overedFeature);
				this.canvas.style.cursor = 'pointer';
				if (!this.selectedObject || nearestObject.uuid !== this.selectedObject.uuid) {
					if (this.overedObject) {
						this.overedObject.hover = false;
						this.overedObject = null;
					}
					nearestObject.hover = true;
					this.overedObject = nearestObject;
				}
				this.map.repaint = true;
				e.preventDefault();
			}
		} else {
			// clean the object overed
			if (this.overedObject) {
				this.overedObject.hover = false;
				this.overedObject = null;
			}
			// now let's check the extrusion layer objects
			let features: mapboxgl.MapboxGeoJSONFeature[] = [];
			if (this.threebox.useSelectingFeatures) {
				features = this.map.queryRenderedFeatures(e.point);
			}
			if (features.length > 0) {
				this.unoverFeature(features[0]);
				if (features[0].layer.type === 'fill-extrusion' && typeof features[0].id !== 'undefined') {
					if (!this.selectedFeature || this.selectedFeature.id !== features[0].id) {
						this.canvas.style.cursor = 'pointer';
						this.overedFeature = features[0];
						this.map.setFeatureState(
							{
								source: this.overedFeature.source,
								sourceLayer: this.overedFeature.sourceLayer,
								id: this.overedFeature.id,
							},
							{ hover: true },
						);
						this.overedFeature = this.map.queryRenderedFeatures(e.point, {
							layers: [this.overedFeature.layer.id],
							filter: ['==', ['id'], this.overedFeature.id],
						})[0];
						this.addTooltip(this.overedFeature);
					}
				}
			}
		}
	};

	private handleMouseOut = (e: mapboxgl.MapMouseEvent & mapboxgl.EventData) => {
		if (this.overedFeature) {
			const features = this.map.queryRenderedFeatures(e.point);
			if (features.length > 0 && this.overedFeature.id !== features[0].id) {
				this.canvas.style.cursor = '';
				// only unover when new feature is another
				this.unoverFeature(features[0]);
			}
		}
	};

	private handleMouseDown = (e: mapboxgl.MapMouseEvent & mapboxgl.EventData) => {
		// Continue the rest of the function shiftkey or altkey are pressed, and if object is selected
		if (
			!(
				(e.originalEvent.shiftKey || e.originalEvent.altKey) &&
				e.originalEvent.button === 0 &&
				this.selectedObject
			)
		) {
			return;
		}

		e.preventDefault();

		this.canvas.style.cursor = 'move';

		// Disable default drag zooming when the shift key is held down.
		// map.dragPan.disable();

		// Call functions for the following events
		this.map.once('mouseup', this.handleMouseUp);
		this.map.once('mouseout', this.handleMouseUp);

		// move the selected object
		this.draggedObject = this.selectedObject;

		// Capture the first xy coordinates
		this.start = this.mousePos(e);
		this.startCoords = this.draggedObject.coordinates;
		this.lngDiff = this.startCoords[0] - e.lngLat.lng;
		this.latDiff = this.startCoords[1] - e.lngLat.lat;
	};

	private handleMouseUp = () => {
		// Set a UI indicator for dragging.
		this.canvas.style.cursor = '';

		// Remove these events now that finish has been called.
		// map.off('mousemove', onMouseMove);
		this.map.off('mouseup', this.handleMouseUp);
		this.map.off('mouseout', this.handleMouseUp);
		this.map.dragPan.enable();

		if (this.draggedObject) {
			this.draggedObject.dispatchEvent({
				type: 'object.dragged',
				draggedAction: this.draggedAction,
			});

			this.draggedObject = null;
			this.draggedAction = null;
		}
	};
}

export default EventHandler;
