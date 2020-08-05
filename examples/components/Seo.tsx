import React from 'react';
import { NextSeo, NextSeoProps } from 'next-seo';

export interface SeoProps {
	path?: string;
}

const Seo: React.FC<NextSeoProps & SeoProps> = props => {
	const {
		title = 'mapbox-gl-threelayer',
		description = 'Plugin to help you use Three.js on Mapbox-GL',
		path = '',
		...other
	} = props;
	return (
		<NextSeo
			title={title}
			description={description}
			openGraph={{ url: `https://salgum1114.github.io/mapbox-gl-threelayer${path}`, title, description }}
			{...other}
		/>
	);
};

export default Seo;
