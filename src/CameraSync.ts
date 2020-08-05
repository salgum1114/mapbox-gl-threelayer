import mapboxgl from 'mapbox-gl';

import Constant from './Constant';
import Utils from './Utils';
import { Matrix4, Group, PerspectiveCamera } from 'three';

export interface CameraSyncState {
	/**
	 * @default Constant.FOV
	 * @type {number}
	 */
	fov?: number;
	/**
	 * @default THREE.Matrix4().makeTranslation(Constant.WORLD_SIZE / 2, -Constant.WORLD_SIZE / 2, 0)
	 * @type {Matrix4}
	 */
	translateCenter?: Matrix4;
	/**
	 * @default Constant.TILE_SIZE / Constant.WORLD_SIZE
	 * @type {number}
	 */
	worldSizeRatio?: number;
	cameraToCenterDistance?: number;
	offset?: { x: number; y: number };
	cameraTranslateZ?: Matrix4;
	maxFurthestDistance?: number;
}

class CameraSync {
	map: mapboxgl.Map;
	camera: PerspectiveCamera;
	world: Group;
	active: boolean;
	state: CameraSyncState;
	cameraTranslateZ: number;

	constructor(map: mapboxgl.Map, camera: PerspectiveCamera, world?: Group) {
		this.map = map;
		this.camera = camera;
		this.active = true;

		this.camera.matrixAutoUpdate = false; // We're in charge of the camera now!

		// Postion and configure the world group so we can scale it appropriately when the camera zooms
		this.world = world || new Group();
		this.world.position.x = this.world.position.y = Constant.WORLD_SIZE / 2;
		this.world.matrixAutoUpdate = false;

		// set up basic camera state
		this.state = {
			fov: Constant.FOV,
			translateCenter: new Matrix4().makeTranslation(Constant.WORLD_SIZE / 2, -Constant.WORLD_SIZE / 2, 0),
			worldSizeRatio: Constant.TILE_SIZE / Constant.WORLD_SIZE,
		};

		this.map
			.on('move', () => {
				this.updateCamera();
			})
			.on('resize', () => {
				this.setupCamera();
			});

		this.setupCamera();
	}

	/**
	 * Set up the camera
	 *
	 * @author salgum1114
	 */
	setupCamera() {
		const map = this.map as any;
		const transform = map.transform;
		this.camera.aspect = transform.width / transform.height; // bug fixed, if aspect is not reset raycast will fail on map resize
		this.camera.updateProjectionMatrix();
		const halfFov = this.state.fov / 2;
		const offset = { x: transform.width / 2, y: transform.height / 2 }; // transform.centerOffset;
		const cameraToCenterDistance = (0.5 / Math.tan(halfFov)) * transform.height;
		const maxPitch = (transform._maxPitch * Math.PI) / 180;
		const acuteAngle = Math.PI / 2 - maxPitch;

		this.state.cameraToCenterDistance = cameraToCenterDistance;
		this.state.offset = offset;
		this.state.cameraTranslateZ = new Matrix4().makeTranslation(0, 0, cameraToCenterDistance);
		this.state.maxFurthestDistance =
			cameraToCenterDistance *
			0.95 *
			((Math.cos(acuteAngle) * Math.sin(halfFov)) /
				Math.sin(Math.max(0.01, Math.min(Math.PI - 0.01, acuteAngle - halfFov))) +
				1);

		this.updateCamera();
	}

	updateCamera() {
		if (!this.camera) {
			console.warn('Not initialized Camera object');
			return;
		}
		const map = this.map as any;
		const transform = map.transform;

		// Furthest distance optimized by @satorbs
		// https://github.com/satorbs/threebox/blob/master/src/Camera/CameraSync.js
		const groundAngle = Math.PI / 2 + transform._pitch;
		const fovAboveCenter = this.state.fov * (0.5 + this.state.offset.y / transform.height);
		const topHalfSurfaceDistance =
			(Math.sin(fovAboveCenter) * this.state.cameraToCenterDistance) /
			Math.sin(Utils.clamp(Math.PI - groundAngle - fovAboveCenter, 0.01, Math.PI - 0.01));

		// Calculate z distance of the farthest fragment that should be rendered.
		const furthestDistance =
			Math.cos(Math.PI / 2 - transform._pitch) * topHalfSurfaceDistance + this.state.cameraToCenterDistance;

		// Add a bit extra to avoid precision problems when a fragment's distance is exactly `furthestDistance`
		const farZ = Math.min(furthestDistance * 1.01, this.state.maxFurthestDistance);

		// someday @ansis set further near plane to fix precision for deckgl,so we should fix it to use mapbox-gl v1.3+ correctly
		// https://github.com/mapbox/mapbox-gl-js/commit/5cf6e5f523611bea61dae155db19a7cb19eb825c#diff-5dddfe9d7b5b4413ee54284bc1f7966d
		const nearZ = transform.height / 50;

		this.camera.projectionMatrix = Utils.makePerspectiveMatrix(
			this.state.fov,
			transform.width / transform.height,
			nearZ,
			farZ,
		);

		// Unlike the Mapbox GL JS camera, separate camera translation and rotation out into its world matrix
		// If this is applied directly to the projection matrix, it will work OK but break raycasting
		const cameraWorldMatrix = this.calcCameraMatrix(transform._pitch, transform.angle);
		this.camera.matrixWorld.copy(cameraWorldMatrix);

		const zoomPow = transform.scale * this.state.worldSizeRatio;
		// Handle scaling and translation of objects in the map in the world's matrix transform, not the camera
		const scale = new Matrix4();
		const translateMap = new Matrix4();
		const rotateMap = new Matrix4();

		scale.makeScale(zoomPow, zoomPow, zoomPow);

		const x = transform.x || transform.point.x;
		const y = transform.y || transform.point.y;
		translateMap.makeTranslation(-x, y, 0);
		rotateMap.makeRotationZ(Math.PI);

		this.world.matrix = new Matrix4()
			.premultiply(rotateMap)
			.premultiply(this.state.translateCenter)
			.premultiply(scale)
			.premultiply(translateMap);

		// utils.prettyPrintMatrix(this.camera.projectionMatrix.elements);
	}

	/**
	 * Calculate Camera Matrix
	 *
	 * @author salgum1114
	 * @param {number} [pitch]
	 * @param {number} [angle]
	 * @param {Matrix4} [translateZ]
	 * @returns
	 */
	calcCameraMatrix(pitch?: number, angle?: number, translateZ?: Matrix4) {
		const map = this.map as any;
		const transform = map.transform;
		const _pitch = pitch === undefined ? transform._pitch : pitch;
		const _angle = angle === undefined ? transform.angle : angle;
		const _translateZ = translateZ === undefined ? this.state.cameraTranslateZ : translateZ;
		return new Matrix4()
			.premultiply(_translateZ)
			.premultiply(new Matrix4().makeRotationX(_pitch))
			.premultiply(new Matrix4().makeRotationZ(_angle));
	}
}

export default CameraSync;
