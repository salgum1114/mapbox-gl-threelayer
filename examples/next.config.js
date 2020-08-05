const rehypePrism = require('@mapbox/rehype-prism');

const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
});

module.exports = withMDX({
	options: {
		remarkPlugins: [],
		rehypePlugins: [rehypePrism],
	},
	pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
	env: {
		prefix: process.env.NODE_ENV === 'production' ? '/mapbox-gl-threelayer' : '',
	},
	assetPrefix: process.env.NODE_ENV === 'production' ? '/mapbox-gl-threelayer' : '',
});
