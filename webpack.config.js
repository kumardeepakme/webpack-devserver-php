const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: 'web',

  mode: 'development',

  devServer: {
    // Specifying a host to use
    host: 'localhost',

    // Specifying a port number
    port: 8989,

    // This is the 🔑 to our approach
    // With a backend on http://localhost/webpack-devserver-php/
    // we will use this to enable proxying
    proxy: {
      // Star(*) defines all the valid requests
      '*': {
        // Specifying the full path to the dist folder
        target: `http://localhost/webpack-devserver-php/dist`,
      },
    },

    // Bundle files will be available in the browser under this path
    publicPath: path.resolve(__dirname, 'dist'),

    // It writes generated assets to the dist folder
    writeToDisk: true,
  },

  entry: {
    index: path.join(__dirname, 'src/index.js'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.php'),
      chunks: ['index'],
      filename: 'index.php',
    }),
  ],
};
