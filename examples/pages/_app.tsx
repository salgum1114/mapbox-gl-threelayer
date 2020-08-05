import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { Layout } from 'antd';
import { ThemeProvider } from 'styled-components';

import { Left, Header, Footer, Content } from '../components';

import 'antd/dist/antd.css';
import '../styles/vars.css';
import '../styles/global.css';

export interface Themes {
	primary: string;
	light: React.CSSProperties;
	dark: React.CSSProperties;
}

const themes: Themes = {
	primary: '#229eae',
	light: {
		backgroundColor: '#fff',
	},
	dark: {},
};

class MyApp extends App<{
	page: any;
}> {
	render() {
		const { Component, pageProps, ...other } = this.props;
		const { metadata = {} } = pageProps;
		const {
			path = '',
			title = 'mapbox-gl-threelayer',
			description = 'Plugin to help you use Three.js on Mapbox-GL',
		} = metadata;

		return (
			<ThemeProvider theme={themes}>
				<Head>
					<title>{title}</title>
					<meta name="description" content={description} />
					<meta name="keywords" content="salgum1114,mapbox-gl,threejs,custom-layer,reactjs" />
					<meta name="google-site-verification" content="YCCU8qpDKf7ka8WDDPA6rt1y0m9egFSi7zeHgmayb6Y" />
					<meta property="og:title" content={title} />
					<meta property="og:description" content={description} />
					<meta property="og:type" content="website" />
					<meta property="og:site_name" content="mapbox-gl-threelayer" />
					<meta property="og:locale" content="ko_KR" />
					<meta property="og:url" content={`https://salgum1114.github.io/mapbox-gl-threelayer${path}`} />
					<meta
						property="og:image"
						content="https://salgum1114.github.io/mapbox-gl-threelayer/salgum1114.png"
					/>
					<meta name="twitter:title" content={title} />
					<meta
						name="twitter:image"
						content="https://salgum1114.github.io/mapbox-gl-threelayer/salgum1114.png"
					/>
					<link rel="manifest" href={`${process.env.prefix}/manifest.json`} />
					<link rel="shortcut icon" href={`${process.env.prefix}/favicon.ico`} />
					<link rel="stylesheet" href="https://fonts.googleapis.com/earlyaccess/notosanskr.css" />
					<link href="https://api.mapbox.com/mapbox-gl-js/v1.11.1/mapbox-gl.css" rel="stylesheet" />
					{/* <script async={true} src="https://www.googletagmanager.com/gtag/js?id=UA-97485289-3" /> */}
					{/* <script>
						{`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'UA-97485289-3');
                        `}
					</script> */}
					{/* <script async={true} src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" /> */}
				</Head>
				<Layout style={{ height: '100%' }}>
					<Left />
					<Layout>
						<Header />
						<Content>
							<Component {...other} />
						</Content>
						<Footer />
					</Layout>
				</Layout>
			</ThemeProvider>
		);
	}
}

export default MyApp;
