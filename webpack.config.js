const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: './dist/bundle.js',
    libraryTarget: 'var',
    library: 'Game'
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/
      }
    ]
  },
  devtool: 'inline-eval-source-map'
};
