const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  plugins: [new CleanWebpackPlugin()],
  entry: path.resolve(__dirname, 'index.js'),
  mode: 'development',
  devtool: false,
  optimization: {
    minimize: true,
    // concatenateModules: true,
    // sideEffects: true,
    // usedExports: true,
  },
};
