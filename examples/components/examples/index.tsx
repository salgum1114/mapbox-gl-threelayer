import dynamic from 'next/dynamic';

const MapboxGL = dynamic(() => import('./MapboxGL'), {
	ssr: false,
});

const ReactMapGL = dynamic(() => import('./ReactMapGL'), {
	ssr: false,
});

// const ReactMapboxGL = dynamic(() => import('./ReactMapboxGL'), {
// 	ssr: false,
// });

export { MapboxGL, ReactMapGL };
