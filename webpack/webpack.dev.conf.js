const mainConfig = require('./webpack.conf.js');
const merge = require('webpack-merge');
const devConfig = {
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
  }

}

module.exports = merge(devConfig, mainConfig);
