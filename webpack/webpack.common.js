const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const commonPaths = require('./paths');

module.exports = env => {
  return {
    entry: commonPaths.entryPath,
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          exclude: /(node_modules)/
        },
        {
          test: /\.(png|jpe?g|gif|svg|JPE?G|PNG|WebP|webp)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: commonPaths.imagesFolder
              }
            }
          ]
        },
        {
          test: /\.(woff2|ttf|woff|eot)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: commonPaths.fontsFolder
              }
            }
          ]
        }
      ]
    },
    resolve: {
      modules: ['src', 'node_modules'],
      extensions: ['*', '.js', '.jsx', '.css', '.webp', '.jpeg', '.jpg'],
      alias: {
        __GLOBAL__: commonPaths.globalPath,
        __SHARED__: commonPaths.sharedPath,
        __ASSETS__: commonPaths.assetsPath,
        __WIDGETS__: commonPaths.widgetsPath,
        __SRC__: commonPaths.srcPath
      }
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new HtmlWebpackPlugin({
        template: commonPaths.templatePath
        // favicon: commonPaths.faviconPath
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV)
      }),
      new ScriptExtHtmlWebpackPlugin({
        defaultAttribute: 'async'
      }),
      new ESLintPlugin({
        extensions: ['js', 'jsx'],
        fix: true,
        emitWarning: JSON.stringify(env.NODE_ENV) !== 'production'
      })
    ]
  };
};
