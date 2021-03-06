const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const common = {
	entry: path.join(__dirname, 'src', 'index.js'),
	output: {
		path: __dirname + '/docs',
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
			    loader: 'style-loader!css-loader'
			},
			{
				test: /\.(jpe?g|png|gif)$/,
		    	exclude: /node_modules/,
				loader: 'file-loader?name=img/[name].[ext]'
			},
			{
				test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
				loader: 'file-loader?name=fonts/[name].[ext]'
			}
		],
		loaders: [
			{
				test: /\.json$/,
				exclude: /node_modules/,
				loader: 'json-loader'
			}
		]
	},
	// plugins: [
	// 	new ExtractTextPlugin('styles.css')
	// ],
	devtool: 'eval-source-map',
	resolve: {
		extensions: ['.js', '.jsx']
	}
};
const developmentConfig = {
	devServer: {
		// inline: true,
		contentBase: './docs',
		hot: true,
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