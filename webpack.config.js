const path = require('path');

module.exports = {
  entry: './src/feature-manager.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'feature-manager.js',
    library: 'FeatureManager',
    libraryTarget: 'umd',
  },
};
