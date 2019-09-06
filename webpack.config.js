const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReplaceInFileWebpackPlugin = require('replace-in-file-webpack-plugin');
const moment = require('moment');

const config = {
	entry: './js/main.jsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.min.js',
	},
	module: {
		rules: [{
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_components)/,
			use: 'babel-loader',
		}, {
			test: /\.(jpe?g|png|gif|svg|ttf)$/i,
			use: [
				{
					loader: 'url-loader',
					options: {
						limit: 8192,
						fallback: 'file-loader',
						name: 'media/[name].[hash:8].[ext]',
					},
				},
			],
		}, {
			test: path.resolve(__dirname, 'node_modules/leader-line/'),
			use: [{
				loader: 'skeleton-loader',
				options: { procedure: content => `${content}export default LeaderLine` },
			}],
		}],
	},
	plugins: [
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: 'style.css',
			chunkFilename: '[id].css',
		}),
		new ReplaceInFileWebpackPlugin([{
			dir: 'dist',
			files: ['index.html'],
			rules: [{
				search: /\$builddate\$/g,
				replace: moment().format('YYYYMMDD'),
			}],
		}]),
	],
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		port: 9009,
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
};

module.exports = (env, argv) => {
	if (argv.mode === 'development') {
		config.module.rules.push({
			test: /\.scss$/,
			use: [
				'style-loader',
				'css-loader',
				'sass-loader',
			],
		});
		config.devtool = 'cheap-module-eval-source-map';
	}
	if (argv.mode === 'production') {
		config.module.rules.push({
			test: /\.scss$/,
			use: [
				MiniCssExtractPlugin.loader,
				'css-loader',
				'sass-loader',
			],
		});
	}
	return config;
};
