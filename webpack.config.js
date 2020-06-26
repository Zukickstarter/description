const path = require('path');

module.exports = {
  mode: 'production',
  entry: './client/index.js',
  watch: true,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        presets: ['@babel/preset-react'],
        plugins: ['@babel/plugin-transform-runtime'],
        plugins: ['@babel/plugin-proposal-class-properties'],
        plugins: ['babel-plugin-styled-components']
      }
    }
    ]
  }
};