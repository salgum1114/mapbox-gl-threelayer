import { Clock, AnimationMixer, CatmullRomCurve3, Vector3, Object3D } from 'three';

import Threebox, { ThreeboxObject } from '../Threebox';

export const AnimationHandlerDefaultOption: { [key: string]: Record<string, any> } = {
	followPath: {
		path: null,
		duration: 1000,
		trackHeading: true,
	},
};

export interface ObjectState {
	worldCoordinates?: any;
	rotation?: any;
	scale?: any;
	quaternion?: any;
}

class AnimationHandler {
	map: mapboxgl.Map;
	threebox: Threebox;
	enrolledObjects: any[];
	previousFrameTime: number;

	constructor(threebox: Threebox, map: mapboxgl.Map) {
		this.map = map;
		this.threebox = threebox;
		this.previousFrameTime = undefined;
		this.enrolledObjects = [];
	}

	enroll = (obj: ThreeboxObject) => {
		const _self = this;
		// add the object default animations
		obj.clock = new Clock();
		obj.hasDefaultAnimation = false;
		obj.defaultAction = undefined;
		obj.actions = [];
		obj.mixer = undefined;

		// if the object includes animations
		if (obj.animations && obj.animations.length > 0) {
			obj.hasDefaultAnimation = true;

			// check first if a defaultAnimation is defined by options
			const daIndex = obj.userData.defaultAnimation ? obj.userData.defaultAnimation : 0;
			obj.mixer = new AnimationMixer(obj as Object3D);

			setAction(daIndex);
		}

		// set the action to play
		function setAction(animationIndex: number) {
			for (let i = 0; i < obj.animations.length; i++) {
				if (animationIndex > obj.animations.length) {
					console.log(`The animation index ${animationIndex} doesn't exist for this object`);
				}
				const animation = obj.animations[i];
				const action = obj.mixer.clipAction(animation);
				obj.actions.push(action);
				// select the default animation and set the weight to 1
				if (animationIndex === i) {
					obj.defaultAction = action;
					action.setEffectiveWeight(1);
				} else {
					action.setEffectiveWeight(0);
				}
				action.play();
			}
		}

		let _isPlaying = false;
		// added property for isPlaying state
		Object.defineProperty(obj, 'isPlaying', {
			get() {
				return _isPlaying;
			},
			set(value) {
				if (_isPlaying != value) {
					_isPlaying = value;
					// Dispatch new event IsPlayingChanged
					obj.dispatchEvent({
						type: 'changed.isPlyaing',
					});
				}
			},
		});

		/* Extend the provided object with animation-specific properties and track in the animation manager */
		this.enrolledObjects.push(obj);

		// Give this object its own internal animation queue
		obj.animationQueue = [];

		obj.set = (option: any) => {
			// if duration is set, animate to the new state
			if (option.duration > 0) {
				const newParams = {
					start: Date.now(),
					expiration: Date.now() + option.duration,
					endState: {},
				};

				_self.threebox.utils.extend(option, newParams);

				const translating = option.coords;
				const rotating = option.rotation;
				const scaling = option.scale || option.scaleX || option.scaleY || option.scaleZ;

				if (rotating) {
					const r = obj.rotation;
					option.startRotation = [r.x, r.y, r.z];

					option.endState.rotation = _self.threebox.utils.rotation(option.rotation, option.startRotation);
					option.rotationPerMs = option.endState.rotation.map((angle: number, index: number) => {
						return (angle - option.startRotation[index]) / option.duration;
					});
				}

				if (scaling) {
					const s = obj.scale;
					option.startScale = [s.x, s.y, s.z];
					option.endState.scale = _self.threebox.utils.scale(option.scale, option.startScale);

					option.scalePerMs = option.endState.scale.map((scale: number, index: number) => {
						return (scale - option.startScale[index]) / option.duration;
					});
				}

				if (translating) {
					option.pathCurve = new CatmullRomCurve3(
						_self.threebox.utils.lnglatsToWorld([obj.coordinates, option.coords]),
					);
				}

				const entry = {
					type: 'set',
					parameters: option,
				};

				obj.animationQueue.push(entry);

				_self.map.repaint = true;
			} else {
				// if no duration set, stop object's existing animations and go to that state immediately
				obj.stop();
				option.rotation = _self.threebox.utils.radify(option.rotation);
				obj.setObject(option);
			}

			return this;
		};

		// animation method, is set by update method
		obj.animationMethod = null;

		// stop animation and the queue
		obj.stop = (_index: number) => {
			if (obj.mixer) {
				obj.isPlaying = false;
				cancelAnimationFrame(obj.animationMethod);
			}
			// TODO: if this is removed, it produces an error in
			obj.animationQueue = [];
			return this;
		};

		obj.followPath = (option: any, callback: any) => {
			const entry = {
				type: 'followPath',
				parameters: _self.threebox.utils.validate(option, AnimationHandlerDefaultOption.followPath),
			};

			_self.threebox.utils.extend(entry.parameters, {
				pathCurve: new CatmullRomCurve3(_self.threebox.utils.lnglatsToWorld(option.path)),
				start: Date.now(),
				expiration: Date.now() + entry.parameters.duration,
				callback,
			});

			obj.animationQueue.push(entry);

			_self.map.repaint = true;

			return this;
		};

		obj.setObject = (option: any) => {
			const p = option.position; // lnglat
			const r = option.rotation; // radians
			const s = option.scale;
			const w = option.worldCoordinates; // Vector3
			const q = option.quaternion; // [axis, angle in rads]
			const t = option.translate; // lnglat + height for 3D objects

			if (p) {
				obj.coordinates = p;
				const c = _self.threebox.utils.projectToWorld(p);
				obj.position.copy(c);
			}

			if (t) {
				obj.coordinates = [obj.coordinates[0] + t[0], obj.coordinates[1] + t[1], obj.coordinates[2] + t[2]];
				const c = _self.threebox.projectToWorld(t);
				obj.translateX(c.x);
				obj.translateY(c.y);
				obj.translateZ(c.z);
			}

			if (r) {
				obj.rotation.set(r[0], r[1], r[2]);
			}
			if (s) {
				obj.scale.set(s[0], s[1], s[2]);
			}
			if (q) {
				obj.quaternion.setFromAxisAngle(q[0], q[1]);
			}
			if (w) {
				obj.position.copy(w);
			}
			obj.updateMatrixWorld();
			_self.map.repaint = true;
		};

		// play default animation
		obj.playDefault = (option: any) => {
			if (obj.mixer && obj.hasDefaultAnimation) {
				const newParams = {
					start: Date.now(),
					expiration: Date.now() + option.duration,
					endState: {},
				};

				_self.threebox.utils.extend(option, newParams);

				const entry = {
					type: 'playDefault',
					parameters: option,
				};

				obj.animationQueue.push(entry);

				_self.map.repaint = true;
				return obj;
			}
			return null;
		};

		// play an animation, requires options.animation as an index, if not it will play the default one
		obj.playAnimation = (option: any) => {
			if (obj.mixer) {
				if (option.animation) {
					setAction(option.animation);
				}
				obj.playDefault(option);
			}
		};

		// pause all actions animation
		obj.pauseAllActions = () => {
			if (obj.mixer) {
				obj.actions.forEach((action: any) => {
					action.paused = true;
				});
			}
		};

		// resume all actions
		obj.resumeAllActions = () => {
			if (obj.mixer) {
				obj.actions.forEach((action: any) => {
					action.paused = false;
				});
			}
		};

		// stop all actions
		obj.deactivateAllActions = () => {
			if (obj.mixer) {
				obj.actions.forEach((action: any) => {
					action.stop();
				});
			}
		};

		// play all actions
		obj.activateAllActions = () => {
			if (obj.mixer) {
				obj.actions.forEach((action: any) => {
					action.play();
				});
			}
		};

		// move the model action one tick just to avoid issues with initial position
		obj.idle = () => {
			if (obj.mixer) {
				// Update the animation mixer and render this frame
				obj.mixer.update(0.01);
			}
			_self.map.repaint = true;
			return this;
		};
	};

	update = (now: number) => {
		if (this.previousFrameTime === undefined) {
			this.previousFrameTime = now;
		}

		// TODO...
		// const dimensions = ['X', 'Y', 'Z'];

		// when function expires this produces an error
		if (!this.enrolledObjects) {
			return false;
		}

		// iterate through objects in queue. count in reverse so we can cull objects without frame shifting
		for (let a = this.enrolledObjects.length - 1; a >= 0; a--) {
			const object = this.enrolledObjects[a];
			if (!object.animationQueue || object.animationQueue.length === 0) {
				continue;
			}
			// now multiple animations on a single object is possible
			for (let i = object.animationQueue.length - 1; i >= 0; i--) {
				// focus on first item in queue
				const item = object.animationQueue[i];
				if (!item) {
					continue;
				}
				const option = item.parameters;
				// if an animation is past its expiration date, cull it
				if (!option.expiration) {
					object.animationQueue.splice(i, 1);
					// set the start time of the next animation
					if (object.animationQueue[i]) {
						object.animationQueue[i].parameters.start = now;
					}
					return false;
				}
				// if finished, jump to end state and flag animation entry for removal next time around. Execute callback if there is one
				const expiring = now >= option.expiration;
				if (expiring) {
					option.expiration = false;
					if (item.type === 'playDefault') {
						object.stop();
					} else {
						if (option.endState) object.setObject(option.endState);
						if (typeof option.callback !== 'undefined') option.callback();
					}
				} else {
					const timeProgress = (now - option.start) / option.duration;
					let objectState: ObjectState = {};
					if (item.type === 'set') {
						if (option.pathCurve) {
							objectState.worldCoordinates = option.pathCurve.getPoint(timeProgress);
						}
						if (option.rotationPerMs) {
							objectState.rotation = option.startRotation.map((rad: number, index: number) => {
								return rad + option.rotationPerMs[index] * timeProgress * option.duration;
							});
						}
						if (option.scalePerMs) {
							objectState.scale = option.startScale.map((scale: number, index: number) => {
								return scale + option.scalePerMs[index] * timeProgress * option.duration;
							});
						}
						object.setObject(objectState);
					}

					if (item.type === 'followPath') {
						const position = option.pathCurve.getPointAt(timeProgress);
						objectState = { worldCoordinates: position };
						// if we need to track heading
						if (option.trackHeading) {
							const tangent = option.pathCurve.getTangentAt(timeProgress).normalize();
							const axis = new Vector3(0, 0, 0);
							const up = new Vector3(0, 1, 0);
							axis.crossVectors(up, tangent).normalize();
							const radians = Math.acos(up.dot(tangent));
							objectState.quaternion = [axis, radians];
						}
						object.setObject(objectState);
					}

					// play default animation
					if (item.type === 'playDefault') {
						object.activateAllActions();
						object.isPlaying = true;
						object.animationMethod = requestAnimationFrame(this.update);
						object.mixer.update(object.clock.getDelta());
						this.map.repaint = true;
					}
				}
			}
		}

		this.previousFrameTime = now;
		return true;
	};
}

export default AnimationHandler;
