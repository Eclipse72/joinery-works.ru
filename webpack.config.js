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
	devtool: 'eval-source-map',
	resolve: {
		extensions: ['.js', '.jsx', '.json']
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