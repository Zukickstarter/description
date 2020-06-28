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
      {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              limit: 10000,
              mimetype: 'application/font-woff',
            },
          },
        ],
      },
    ]
  },
  watch: true
};