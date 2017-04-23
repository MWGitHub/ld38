const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: __dirname,
    filename: './dist/bundle.js',
    libraryTarget: 'var',
    library: 'Game'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /.ts$/,
        loaders: ['babel-loader', 'ts-loader'],
        exclude: /(node_modules)/
      }
    ]
  },
  devtool: 'inline-eval-source-map'
};
