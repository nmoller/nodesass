var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.bundle.js'
	},
	// Issue dev-server
	//target: 'node',
	//externals: {
	//	fs: "commonjs fs"
	//},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 3000,
		stats: 'errors-only'
	},
	module: {
		rules: [
			{
				test: /\.txt/,
				use: 'raw-loader'
			},
			{
				test: /\.js$/,
				exclude: /node_module/,
				use: 'babel-loader'
			},
			{
				test:/\.scss$/,
				use: ExtractTextPlugin.extract({
		          fallback: 'style-loader',
		          use: ['css-loader', 'sass-loader' ]
		        })
			}
		]
	},

	plugins: [
	new HtmlWebpackPlugin({
		title: 'Webpack Test'
	}),
	new ExtractTextPlugin("testapp.css")
	]
}