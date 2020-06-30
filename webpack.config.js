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
      // this is required for loading custom fonts set in /description/client/stylesFormat.js
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