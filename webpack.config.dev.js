const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/index.tsx',
	output: {
		filename: 'bundle.js',
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
	],
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		hot: true,
		open: true,
	},
};
