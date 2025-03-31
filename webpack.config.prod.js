const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	mode: 'production',
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: 'ts-loader',
			},
			{
				test: /\.(svg|jpg|jpeg|webp)$/,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
			{
				test: /\.css$/,
				include: path.resolve(__dirname, 'src'),
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx', '.tsx', '.ts'],
		alias: {
			'@components': path.resolve(__dirname, 'src/components'),
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@styles': path.resolve(__dirname, 'src/styles'),
			'@src': path.resolve(__dirname, 'src/'),
			'@hooks': path.resolve(__dirname, 'src/hooks'),
			'@consts': path.resolve(__dirname, 'src/consts'),
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
		new CopyPlugin([
			{ from: './public/sitemap.xml', to: '' },
			{ from: './public/robots.txt', to: '' },
			{ from: './public/google7e7833f1ba82cd0d.html', to: '' },
		]),
	],
	target: ['web', 'es5'],
};
