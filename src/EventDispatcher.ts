import { EventEmitter } from 'events';
import { ThreeboxEventType, ThreeboxObject } from './Threebox';

export interface EventPayload {
	type: 'object' | 'feature';
	target?: ThreeboxObject | mapboxgl.MapboxGeoJSONFeature;
	[attachment: string]: any;
}

class EventDispatcher {
	emitter: EventEmitter;

	constructor() {
		this.emitter = new EventEmitter();
	}

	on(type: ThreeboxEventType, listener?: (payload?: EventPayload) => any) {
		this.emitter.on.apply(this.emitter, [type, listener]);
		return this;
	}

	once(type: ThreeboxEventType, listener?: (payload?: EventPayload) => any) {
		this.emitter.once.apply(this.emitter, [type, listener]);
		return this;
	}

	emit(type: ThreeboxEventType, payload?: EventPayload) {
		this.emitter.emit.apply(this.emitter, [type, payload]);
		return this;
	}

	off(type: ThreeboxEventType, listener?: (payload?: EventPayload) => any) {
		this.emitter.removeListener.apply(this.emitter, [type, listener]);
		return this;
	}
}

export default EventDispatcher;
