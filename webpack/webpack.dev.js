const webpack = require('webpack');

const commonPaths = require('./paths');

module.exports = {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: commonPaths.outputPath,
    chunkFilename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: {
                localIdentName: '[local]'
              }
            }
          }
        ]
      }
    ]
  },
  devServer: {
    compress: true,
    historyApiFallback: true,
    open: true,
    port: 2412
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
