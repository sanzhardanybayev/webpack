var path = require('path');
var webpack = require('webpack');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('shared.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	context: path.resolve('js'),
	entry: {
		about: './about_page.js',
		home: './home_page.js',
		contact: './contact_page.js',
	},
	output: {
		path: path.resolve('build/'),
		publicPath: '/public/assets/',
		filename: "[name].js"
	},

	plugins: [
		commonsPlugin,
		new ExtractTextPlugin("styles.css")
	],

	devServer: {
		contentBase: 'public'
	},

	watch: true, 
	module: {
		preLoaders: [
			{
				test: /\.js$/,
				exclude: 'node_modules',
				loader: 'jshint-loader'
			}
		],
		loaders: [
			{
				test: /\.es6$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				query: {
                	presets: ["es2015"]
            	}
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract("style-loader","css-loader!autoprefixer-loader")
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract("style-loader","css-loader!autoprefixer-loader!sass-loader")
			},
			{
				test: /\.sass$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract("style-loader","css-loader!autoprefixer-loader!sass-loader")
			},
			{
				test: /\.(png|jpg|ttf|eot)$/,
				exclude: /node_modules/,
				loader: 'url-loader?limit=1000000'
			}
		]
	},

	resolve:{
		extensions: ['','.js','.es6']
	}
}