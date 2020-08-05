import * as THREE from 'three';

import Utils from './Utils';

export interface MaterialOption {
	material: any;
	color: string;
	opacity: number;
}

export const MaterialDefaultOption: MaterialOption = {
	material: 'MeshBasicMaterial',
	color: 'black',
	opacity: 1,
};

const Material = (option: MaterialOption) => {
	let output;
	let _option;
	if (option) {
		_option = Utils.validate(option, MaterialDefaultOption);
		if (_option.material && _option.material.isMaterial) {
			// check if user provided material object
			output = _option.material;
		} else if (_option.material || _option.color || _option.opacity) {
			// check if user provided any material parameters. create new material object based on that.
			const three = THREE as any;
			output = new three[_option.material]({ color: _option.color, transparent: _option.opacity < 1 });
		} else {
			// if neither, return default material
			output = generateDefaultMaterial();
		}
		output.opacity = _option.opacity;
	} else {
		// if no options, return default
		output = generateDefaultMaterial();
	}
	function generateDefaultMaterial() {
		const three = THREE as any;
		return three[MaterialDefaultOption.material]({ color: MaterialDefaultOption.color });
	}
	return output;
};

export default Material;
