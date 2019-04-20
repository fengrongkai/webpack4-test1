const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
prodConfig = {
    mode:'none',
    devtool:'cheap-module-source-map',
}
module.exports = merge(commonConfig,prodConfig);