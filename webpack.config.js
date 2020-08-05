const webpack = require('webpack');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const pkg = require('./package.json');

module.exports = {
	mode: 'production',
	entry: {
		[pkg.name]: [path.resolve(__dirname, 'src/index.ts')],
		[`${pkg.name}.min`]: [path.resolve(__dirname, 'src/index.ts')],
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		library: `${pkg.name}.js`,
		libraryTarget: 'umd',
		umdNamedDefine: true,
		publicPath: './',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx|tsx|ts)$/,
				loader: 'babel-loader?cacheDirectory',
				include: path.resolve(__dirname, 'src'),
				options: {
					presets: [
						[
							'@babel/preset-env',
							{
								targets: {
									browsers: ['last 2 versions', 'ie >= 11'],
								},
							},
						],
						'@babel/preset-typescript',
					],
					plugins: [
						[
							'@babel/plugin-transform-runtime',
							{
								corejs: 3,
								shippedProposals: true,
							},
						],
						'@babel/plugin-proposal-async-generator-functions',
						'@babel/plugin-proposal-class-properties',
						'@babel/plugin-proposal-object-rest-spread',
					],
				},
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				include: /\.min\.js$/,
				exclude: /node_modules/,
				cache: true,
				parallel: true,
				terserOptions: {
					warnings: false,
					compress: {
						warnings: false,
						unused: true,
					},
					ecma: 2017, // Because trailling caommas in three.js module (three.module.js #9474)
					mangle: true,
					unused: true,
				},
				sourceMap: true,
			}),
		],
	},
	plugins: [
		new webpack.DefinePlugin({
			VERSION: JSON.stringify(pkg.version),
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			debug: false,
		}),
	],
};
