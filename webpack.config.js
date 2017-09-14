const path = require('path');

const common = {
	entry: path.join(__dirname, 'src', 'index.jsx'),
	output: {
		path: __dirname+'/public',
		filename: 'bundle.js'
	},
	module: {
	  rules: [
	    {
	    	test: /\.jsx?$/, 
	    	exclude: /node_modules/, 
	    	loader: 'react-hot-loader!babel-loader'
	    },
	    {
	    	test: /\.css$/, 
	    	exclude: /node_modules/, 
	    	loader: 'style-loader!css-loader'
		},
	  ]
	},
	devtool: 'eval-source-map',
	resolve: {
		extensions: ['.js', '.jsx']
	}
};
const developmentConfig = {
	devServer: {
		inline: true,
		contentBase: './public',

		// stats:'errors-only',
		// port: 9000
	}
};

module.exports = function(env) {
	if (env === 'production'){
		return common;
	}
	if (env === 'development'){
		return Object.assign(
			{},
			common,
			developmentConfig
		)
	}
};
// const webpack = require('webpack')
// const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const outputPath = path.resolve(__dirname, './dist')

// const webpackConfig = {
// 	entry: {
// 		app: [
// 			path.resolve(__dirname, './src/index.js')
// 		]
// 	},
// 	output: {
// 		path: path.resolve(__dirname, './dist'),
// 		filename: '[name].js'
// 	},
// 	module: {
// 		rules: [
// 			{
// 				test: /\.js$/,
// 				exclude: /node_modules/,
// 				use: 'babel-loader'
// 			},
// 			{
// 				test: /\.scss$/,
// 				exclude: /node_modules/,
// 				use: [
// 					'style-loader',
// 					'css-loader',
// 					'sass-loader'
// 				]
// 			},
// 			{
// 				test: /\.(gif|png|jpg|jpeg|svg)$/,
// 				exclude: /node_modules/,
// 				include: path.resolve(__dirname, './src/assets/'),
// 				use: 'url-loader?limit=10000&name=assets/[name]-[hash].[ext]'
// 			}
// 		]
// 	},
// 	plugins: [
// 		new HtmlWebpackPlugin({
// 			template: path.join(__dirname, './src/assets/index.html'),
// 			filename: 'index.html',
// 			path: outputPath
// 		}),
// 		new webpack.NamedModulesPlugin(),
// 		new webpack.HotModuleReplacementPlugin()
// 	],
// 	devServer: {
// 		contentBase: path.resolve(__dirname, './dist'),
// 		port: 8080,
// 		historyApiFallback: true,
// 		inline: true,
// 		hot: true,
// 		host: '0.0.0.0'
// 	}
// }

// module.exports = webpackConfig