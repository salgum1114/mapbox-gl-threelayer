import React, { useEffect, useRef } from 'react';
import * as mapboxgl from 'mapbox-gl';
import { ThreeLayer } from 'mapbox-gl-threelayer';

const MapboxGL = () => {
	const mapRef = useRef<mapboxgl.Map>();
	useEffect(() => {
		mapRef.current = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/streets-v11',
			accessToken: 'pk.eyJ1IjoianNjYXN0cm8iLCJhIjoiY2s2YzB6Z25kMDVhejNrbXNpcmtjNGtpbiJ9.28ynPf1Y5Q8EyB_moOHylw',
			zoom: 16,
			pitch: 60,
			center: [127.04674407739593, 37.30012673302676],
		});
		mapRef.current.on('load', () => {
			addThreeLayer(mapRef.current);
		});
	}, []);
	const addThreeLayer = (map: mapboxgl.Map) => {
		const threeLayer = new ThreeLayer();
		map.addLayer(threeLayer);
		threeLayer.threebox
			.loadModel({
				url: 'https://docs.mapbox.com/mapbox-gl-js/assets/34M_17/34M_17.gltf',
				type: 'gltf',
				units: 'meters',
			})
			.then(group => {
				group.setCoords([127.04674407739593, 37.30012673302676]);
				threeLayer.threebox.add(group);
			});
	};
	return <div id="map" style={{ width: '100%', height: '100%' }} />;
};

export default MapboxGL;
