const path = require('path');

module.exports = {
  root: path.resolve(__dirname, '../'),
  outputPath: path.resolve(__dirname, '../', 'build'),
  entryPath: path.resolve(__dirname, '../', 'src/index.jsx'),
  templatePath: path.resolve(__dirname, '../', 'src/index.html'),
  globalPath: path.resolve(__dirname, '../', 'src/Global'),
  sharedPath: path.resolve(__dirname, '../', 'src/Components'),
  assetsPath: path.resolve(__dirname, '../', 'src/Assets'),
  faviconPath: path.resolve(__dirname, '../', 'src/Assets/favicon.ico'),
  imagesFolder: 'images',
  fontsFolder: 'fonts',
  cssFolder: 'css',
  jsFolder: 'js'
};
