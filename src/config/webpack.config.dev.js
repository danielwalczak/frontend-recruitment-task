const webpack = require('webpack');

require('./environment');
const { SRC } = require('./paths');
const defaultConfig = require('./webpack.common');

const devConfig = Object.assign({}, defaultConfig, {
  entry: {
    app: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      `${SRC}/styles/app.scss`,
      `${SRC}/client-entry.js`
    ]
  },
});

devConfig.plugins.push(
  new webpack.HotModuleReplacementPlugin()
);
module.exports = devConfig;
