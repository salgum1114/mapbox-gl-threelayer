import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const examples: React.FC = () => {
	const router = useRouter();
	useEffect(() => {
		router.push(`${process.env.prefix}/examples/mapbox-gl`);
	}, []);
	return null;
};

export default examples;
