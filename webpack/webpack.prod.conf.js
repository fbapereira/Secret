const mainConfig = require('./webpack.conf.js');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const prodConfig = {
  "devServer": {
    "historyApiFallback": true,
    proxy: {
      "/Api": {
        "target": 'https://frontapi.cherrytech.com',
        "pathRewrite": {
          '^/Api': ''
        },
        "changeOrigin": true,
        "secure": false
      },
    }
  },
  "plugins": [
    new UglifyJSPlugin({
      uglifyOptions: {
        parallel: {
          cache: true
        },
        compress: {
          drop_console: true,
          drop_debugger: true
        },
        output: {
          comments: false
        }
      }
    })
  ]

}

module.exports = merge(prodConfig, mainConfig);
