const WORLD_SIZE = 1024000;
const MERCATOR_A = 6378137.0;
const FOV = Math.atan(3 / 4);

const Constant = {
	WORLD_SIZE,
	PROJECTION_WORLD_SIZE: WORLD_SIZE / (MERCATOR_A * Math.PI * 2),
	MERCATOR_A, // 900913 projection property
	DEG2RAD: Math.PI / 180,
	RAD2DEG: 180 / Math.PI,
	EARTH_CIRCUMFERENCE: 40075000, // In meters
	FOV, // Math.atan(3/4) radians. If this value is changed, FOV_DEGREES must be calculated
	FOV_DEGREES: (FOV * 360) / (Math.PI * 2), // Math.atan(3/4) in degrees
	TILE_SIZE: 512,
};

export default Constant;
