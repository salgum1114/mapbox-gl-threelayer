import Constant from './Constant';
import { Matrix4, Vector3, Object3D, PerspectiveCamera, Geometry } from 'three';

import Validator from './Validator';
import { ThreeboxObject } from './Threebox';

class Utils {
	Validator = new Validator();
	exposedMethods = ['projectToWorld', 'projectedUnitsPerMeter', 'extend', 'unprojectFromWorld'];

	/**
	 *
	 *
	 * @author salgum1114
	 * @param {number[]} uglymatrix
	 */
	prettyPrintMatrix(uglymatrix: number[]) {
		for (let s = 0; s < 4; s++) {
			const quartet = [uglymatrix[s], uglymatrix[s + 4], uglymatrix[s + 8], uglymatrix[s + 12]];
			console.log(
				quartet.map(num => {
					return num.toFixed(4);
				}),
			);
		}
	}

	/**
	 *
	 *
	 * @author salgum1114
	 * @param {number} fovy
	 * @param {number} aspect
	 * @param {number} near
	 * @param {number} far
	 * @returns
	 */
	makePerspectiveMatrix(fovy: number, aspect: number, near: number, far: number) {
		const out = new Matrix4();
		const f = 1.0 / Math.tan(fovy / 2);
		const nf = 1 / (near - far);
		const newMatrix = [f / aspect, 0, 0, 0, 0, f, 0, 0, 0, 0, (far + near) * nf, -1, 0, 0, 2 * far * near * nf, 0];
		out.elements = newMatrix;
		return out;
	}

	/**
	 * gimme radians
	 *
	 * @author salgum1114
	 * @param {(number | [number, number, number] | { x: number; y: number; z: number })} deg
	 * @returns
	 */
	radify(deg: number | [number, number, number] | { x: number; y: number; z: number }) {
		const convert = (degrees: number) => {
			degrees = degrees || 0;
			return (Math.PI * 2 * degrees) / 360;
		};
		if (Array.isArray(deg)) {
			// if [x,y,z] array of rotations
			return deg.map(degree => {
				return convert(degree);
			});
		} else if (typeof deg === 'object') {
			// if {x, y, z} rotation object
			return [convert(deg.x), convert(deg.y), convert(deg.z)];
		} else {
			// if just a number
			return convert(deg);
		}
	}

	/**
	 * gimme degrees
	 *
	 * @author salgum1114
	 * @param {(number | { x: number; y: number; z: number })} rad
	 * @returns
	 */
	degreeify(rad: number | { x: number; y: number; z: number }) {
		const convert = (radians: number) => {
			radians = radians || 0;
			return (radians * 360) / (Math.PI * 2);
		};
		if (typeof rad === 'object') {
			return [convert(rad.x), convert(rad.y), convert(rad.z)];
		} else {
			return convert(rad);
		}
	}

	/**
	 *
	 *
	 * @author salgum1114
	 * @param {[number, number, number]} coords
	 * @returns
	 */
	projectToWorld(coords: [number, number, number]) {
		// Spherical mercator forward projection, re-scaling to WORLD_SIZE
		const projected = [
			-Constant.MERCATOR_A * Constant.DEG2RAD * coords[0] * Constant.PROJECTION_WORLD_SIZE,
			-Constant.MERCATOR_A *
				Math.log(Math.tan(Math.PI * 0.25 + 0.5 * Constant.DEG2RAD * coords[1])) *
				Constant.PROJECTION_WORLD_SIZE,
		];
		// z dimension, defaulting to 0 if not provided
		if (!coords[2]) {
			projected.push(0);
		} else {
			const pixelsPerMeter = this.projectedUnitsPerMeter(coords[1]);
			projected.push(coords[2] * pixelsPerMeter);
		}
		const result = new Vector3(projected[0], projected[1], projected[2]);
		return result;
	}

	/**
	 *
	 *
	 * @author salgum1114
	 * @param {number} latitude
	 * @returns
	 */
	projectedUnitsPerMeter(latitude: number) {
		return Math.abs(Constant.WORLD_SIZE / Math.cos(Constant.DEG2RAD * latitude) / Constant.EARTH_CIRCUMFERENCE);
	}

	/**
	 *
	 *
	 * @author salgum1114
	 * @param {[number, number, number]} centerLatLng
	 * @param {Vector3[]} vertices
	 * @returns
	 */
	scaleVerticesToMeters(centerLatLng: [number, number, number], vertices: Vector3[]) {
		const pixelsPerMeter = this.projectedUnitsPerMeter(centerLatLng[1]);
		// const centerProjected = this.projectToWorld(centerLatLng);
		vertices.forEach(vertice => vertice.multiplyScalar(pixelsPerMeter));
		return vertices;
	}

	/**
	 * @deprecated
	 *
	 * @author salgum1114
	 * @param {[number, number, number]} coords
	 */
	projectToScreen(coords: [number, number, number]) {
		console.log('[WARNING] Projecting to screen coordinates is not yet implemented', coords);
	}

	/**
	 * @deprecated
	 *
	 * @author salgum1114
	 * @param {[number, number, number]} pixel
	 */
	unprojectFromScreen(pixel: [number, number, number]) {
		console.log('[WARNING] unproject is not yet implemented', pixel);
	}

	/**
	 * world units to lnglat
	 *
	 * @author salgum1114
	 * @param {{ x: number; y: number; z: number }} worldUnits
	 * @returns
	 */
	unprojectFromWorld(worldUnits: { x: number; y: number; z: number }) {
		const unprojected = [
			-worldUnits.x / (Constant.MERCATOR_A * Constant.DEG2RAD * Constant.PROJECTION_WORLD_SIZE),
			(2 *
				(Math.atan(Math.exp(worldUnits.y / (Constant.PROJECTION_WORLD_SIZE * -Constant.MERCATOR_A))) -
					Math.PI / 4)) /
				Constant.DEG2RAD,
		];
		const pixelsPerMeter = this.projectedUnitsPerMeter(unprojected[1]);
		// z dimension
		const height = worldUnits.z || 0;
		unprojected.push(height / pixelsPerMeter);
		return unprojected;
	}

	/**
	 * @deprecated
	 *
	 * @author salgum1114
	 * @param {Object3D} obj
	 * @param {PerspectiveCamera} camera
	 * @returns
	 */
	toScreenPosition(obj: Object3D, camera: PerspectiveCamera) {
		console.warn('[DEPRECATED] Not used', obj, camera);
		// const vector = new THREE.Vector3();

		// const widthHalf = 0.5 * renderer.context.canvas.width;
		// const heightHalf = 0.5 * renderer.context.canvas.height;

		// obj.updateMatrixWorld();
		// vector.setFromMatrixPosition(obj.matrixWorld);
		// vector.project(camera);

		// vector.x = (vector.x * widthHalf) + widthHalf;
		// vector.y = - (vector.y * heightHalf) + heightHalf;

		// return {
		// 	x: vector.x,
		// 	y: vector.y
		// };
	}

	/**
	 * get the center point of a feature
	 *
	 * @author salgum1114
	 * @param {GeoJSON.Feature<any>} feature
	 * @param {ThreeboxObject} [obj]
	 * @param {number} [level]
	 * @returns
	 */
	getFeatureCenter(feature: GeoJSON.Feature<any>, obj?: ThreeboxObject, level?: number) {
		let center: number[] = [];
		let latitude = 0;
		let longitude = 0;
		let height = 0;
		let coordinates = [];
		// deep clone to avoid modifying the original array
		coordinates.push(...feature.geometry.coordinates[0]);
		if (feature.geometry.type === 'Point') {
			center = coordinates[0];
		} else {
			// features in mapbox repeat the first coordinates at the end. We remove it.
			if (feature.geometry.type === 'MultiPolygon') coordinates = coordinates[0];
			coordinates.splice(-1, 1);
			coordinates.forEach((c: any) => {
				latitude += c[0];
				longitude += c[1];
			});
			center = [latitude / coordinates.length, longitude / coordinates.length];
		}
		height = this.getObjectHeightOnFloor(feature, obj, level);
		center.length < 3 ? center.push(height) : (center[2] = height);
		return center;
	}

	/**
	 *
	 *
	 * @author salgum1114
	 * @param {GeoJSON.Feature<any>} feature
	 * @param {ThreeboxObject} obj
	 * @param {number} [level=feature.properties.level || 0]
	 * @returns
	 */
	getObjectHeightOnFloor(
		feature: GeoJSON.Feature<any>,
		obj?: ThreeboxObject,
		level = feature.properties.level || 0,
	): number {
		const floorHeightMin = level * (feature.properties.levelHeight || 0);
		// object height is modelSize.z + base_height or min_height configured for this object
		const base = feature.properties.base_height || feature.properties.min_height || 0;
		// let height = ((obj && obj.model) ? obj.modelSize.z : (feature.properties.height - base));
		const height = obj && obj.model ? 0 : feature.properties.height - base;
		const objectHeight = height + base;
		const modelHeightFloor = floorHeightMin + objectHeight;
		return modelHeightFloor;
	}

	/**
	 * @deprecated
	 *
	 * @author salgum1114
	 * @param {*} obj
	 */
	flipMaterialSides(obj: any) {
		console.warn('[DEPRECATED] Not used', obj);
	}

	/**
	 * to improve precision, normalize a series of vector3's to their collective center, and move the resultant mesh to that center
	 *
	 * @author salgum1114
	 * @param {Vector3[]} vertices
	 * @returns
	 */
	normalizeVertices(vertices: Vector3[]) {
		const geometry = new Geometry();
		vertices.forEach(v3 => geometry.vertices.push(v3));
		geometry.computeBoundingSphere();
		const center = geometry.boundingSphere.center;
		// const radius = geometry.boundingSphere.radius;
		const scaled = vertices.map(v3 => {
			const normalized = v3.sub(center);
			return normalized;
		});
		return { vertices: scaled, position: center };
	}

	/**
	 * flatten an array of Vector3's into a shallow array of values in x-y-z order, for bufferGeometry
	 *
	 * @author salgum1114
	 * @param {Vector3[]} vectors
	 * @returns
	 */
	flattenVectors(vectors: Vector3[]) {
		const flattenedArray: [number?, number?, number?] = [];
		vectors.forEach(vertex => flattenedArray.push(vertex.x, vertex.y, vertex.z));
		return flattenedArray;
	}

	// convert a line/polygon to Vector3's
	lnglatsToWorld(coords: any[]) {
		const vector3 = coords.map(pt => {
			const p = this.projectToWorld(pt);
			const v3 = new Vector3(p.x, p.y, p.z);
			return v3;
		});
		return vector3;
	}

	/**
	 *
	 *
	 * @author salgum1114
	 * @param {Record<string, any>} original
	 * @param {Record<string, any>} addition
	 */
	extend(original: Record<string, any>, addition: Record<string, any>) {
		Object.keys(addition).forEach(key => (original[key] = addition[key]));
	}

	/**
	 *
	 *
	 * @author salgum1114
	 * @param {Record<string, any>} original
	 * @returns
	 */
	clone(original: Record<string, any>) {
		const clone: Record<string, any> = {};
		Object.keys(original).forEach(key => (clone[key] = original[key]));
		return clone;
	}

	/**
	 *
	 *
	 * @author salgum1114
	 * @param {number} n
	 * @param {number} min
	 * @param {number} max
	 * @returns
	 */
	clamp(n: number, min: number, max: number) {
		return Math.min(max, Math.max(min, n));
	}

	/**
	 * retrieve object parameters from an options object
	 *
	 * @author salgum1114
	 * @param {(number | { x: number; y: number; z: number })} rotation
	 * @param {[number, number, number]} currentRotation
	 * @returns
	 */
	rotation(rotation: number | { x: number; y: number; z: number }, currentRotation: [number, number, number]) {
		// rotation default 0
		let r = rotation;
		if (!r) {
			r = 0;
		}
		// if number provided, rotate only in Z by that amount
		if (typeof r === 'number') {
			r = { z: r } as { x: number; y: number; z: number };
		}
		const degrees = this.applyDefault([r.x, r.y, r.z], currentRotation);
		const radians = this.radify(degrees);
		return radians;
	}

	/**
	 * retrieve object parameters from an options object
	 *
	 * @author salgum1114
	 * @param {(number | { x: number; y: number; z: number })} scale
	 * @param {[number, number, number]} currentScale
	 * @returns
	 */
	scale(scale: number | { x: number; y: number; z: number }, currentScale: [number, number, number]) {
		// scale default 1
		let s = scale;
		if (!s) {
			s = 1;
		}
		if (typeof s === 'number') {
			return [s, s, s];
		} else {
			return this.applyDefault([s.x, s.y, s.z], currentScale);
		}
	}

	/**
	 * retrieve object parameters from an options object
	 *
	 * @author salgum1114
	 * @param {[number, number, number]} array
	 * @param {[number, number, number]} current
	 * @returns
	 */
	applyDefault(array: [number, number, number], current: [number, number, number]) {
		return array.map((item, index) => {
			item = item || current[index];
			return item;
		}) as [number, number, number];
	}

	/**
	 *
	 *
	 * @author salgum1114
	 * @param {Record<string, any>} userInputs
	 * @param {Record<string, any>} defaults
	 * @returns
	 */
	validate(userInputs: Record<string, any>, defaults: Record<string, any>) {
		const _userInputs = userInputs || {};
		const validatedOutput: Record<string, any> = {};
		this.extend(validatedOutput, userInputs);
		Object.keys(defaults).some(key => {
			if (_userInputs[key] === undefined) {
				// make sure required params are present
				if (defaults[key] === null) {
					console.error(key + ' is required');
					return false;
				} else {
					validatedOutput[key] = defaults[key];
				}
			} else {
				validatedOutput[key] = _userInputs[key];
			}
			return false;
		});
		return validatedOutput;
	}
}

export default new Utils();
