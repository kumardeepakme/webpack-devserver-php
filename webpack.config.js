const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: 'web',

  mode: 'development',

  devServer: {
    devMiddleware: {
      publicPath: join(__dirname, 'build'),
      writeToDisk: true,
    },
    hot: false,
    port: '8989',
    proxy: {
      '/': {
        target: `http://localhost/webpack-devserver-php/dist`,
      },
    },
    static: false,
    watchFiles: ['src/**/*.*', 'app/**/*.*'],
  },

  entry: {
    index: join(__dirname, 'src/index.js'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: join(__dirname, 'src/index.php'),
      chunks: ['index'],
      filename: 'index.php',
    }),
  ],
};
