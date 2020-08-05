import mapboxgl from 'mapbox-gl';

import Threebox, { ThreeboxOption } from './Threebox';

export interface ThreeLayerOption {
	id?: string;
	visible?: boolean;
	threeboxOption?: ThreeboxOption;
}

class ThreeLayer implements mapboxgl.CustomLayerInterface {
	id: string;
	type: 'custom';
	renderingMode?: '3d';
	visible?: boolean;
	map: mapboxgl.Map;
	threebox: Threebox;
	threeboxOption: ThreeboxOption;

	constructor(option?: ThreeLayerOption) {
		this.id = option?.id || 'three-layer';
		this.type = 'custom';
		this.renderingMode = '3d';
		this.visible = option?.visible || true;
		this.threeboxOption = option?.threeboxOption || {};
	}

	onRemove?(_map: mapboxgl.Map, _gl: WebGLRenderingContext): void {
		if (this.threebox) {
			this.threebox.dispose();
		}
	}

	onAdd?(map: mapboxgl.Map, gl: WebGLRenderingContext): void {
		this.map = map;
		this.threebox = new Threebox(map, gl, this.threeboxOption);
	}

	render(_gl: WebGLRenderingContext, _matrix: number[]): void {
		this.threebox.update();
	}
}

export default ThreeLayer;
