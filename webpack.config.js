const path = require('path');
const GoogleFontsPlugin = require('@beyonk/google-fonts-webpack-plugin');


module.exports = {
  mode: 'production',
  entry: './client/index.js',
  watch: true,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  plugins: [
    new GoogleFontsPlugin({
      fonts: [
        { family: 'Lato' },
        { family: 'Roboto', variants: [ '400', '700italic' ] }
      ]
      /* ...options */
    })],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          presets: ['@babel/preset-react'],
          plugins: ['@babel/plugin-transform-runtime'],
          plugins: ['@babel/plugin-proposal-class-properties'],
          plugins: ['babel-plugin-styled-components']
        },
      },
      // {
      //   test: /\.(woff|woff2|eot|ttf|otf)$/,
      //   use: {
      //     loader: 'url-loader', // tried url-loader and file-loader
      //     options: {
      //       limit: 50000,
      //       mimetype: 'application/font-woff',
      //       name: './assets/fonts/[name].[ext]',
      //       publicPath: '../'
      //     }
      //   }
      // }
    ]
  },
  watch: true
};