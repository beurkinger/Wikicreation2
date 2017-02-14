var webpack = require('webpack');
var HTMLWebpackPlugin = require('html-webpack-plugin');
// const path = require('path');
// var CompressionPlugin = require('compression-webpack-plugin');

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: __dirname + '/app/index.js',
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  output: {
    filename: '/transformed-mini.js',
    path: __dirname + '/../press/wp-content/themes/wikicreation/build'
  },
  // resolve: {
	// 	extensions: ['', '.js', '.jsx'],
	// 	 alias: {
	// 		'react$': path.join(__dirname, 'node_modules', 'react','dist','react.min.js'),
	// 		'react-dom$': path.join(__dirname, 'node_modules', 'react-dom','dist','react-dom.min.js')
	// 	}
	// },
  plugins: [HTMLWebpackPluginConfig,
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    // new CompressionPlugin({
    //   asset: "[path].gz[query]",
    //   algorithm: "gzip",
    //   test: /\.js$|\.css$|\.html$/,
    //   threshold: 10240,
    //   minRatio: 0.8
    // })
  ]
};
