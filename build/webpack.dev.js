const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
 const devConfig = {
    mode:'development',
    devtool:'cheap-module-eval-source-map',
    devServer:{
        contentBase:'./dist',
        open:true,
        hot:true,
        hotOnly:true,
        proxy:{
            '/api':'http://frk:3000'
        }
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ],
}
module.exports = merge(commonConfig,devConfig)