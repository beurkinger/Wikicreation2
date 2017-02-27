const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const production = false;

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

var plugins = [HTMLWebpackPluginConfig];
var outputFilename = 'transformed.js';
var outputPath = __dirname + '/build';

if (production) {
  plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ];
  outputFilename = 'transformed-mini.js';
  outputPath = __dirname + '/../press/wp-content/themes/wikicreation/build';
}

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
    filename: outputFilename,
    path: outputPath
  },
  plugins: plugins
};
