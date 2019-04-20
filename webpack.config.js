const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
function resolve(dist){
    return path.resolve(__dirname,dist);
}
module.exports = {
    mode:'production',
    entry:'./src/index.js',
    devtool:'cheap-module-source-map',
    output:{ 
        filename:'[name].[hash].js',
        path:path.resolve(__dirname,'dist'),
        publicPath:'/'
    },
    devServer:{
        contentBase:'./dist',
        open:true,
        hot:true,
        hotOnly:true,
        proxy:{
            '/api':'http://frk:3000'
        }
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                include:[resolve('src')],
                exclude:[resolve('node_modules')],
                // options:{
                //     presets:[
                //         ['@babel/preset-env',{
                //         useBuiltIns:'usage',
                //         targets: {
                //             // chrome: "67",
                //           },
                //         corejs:3
                //     }]
                // ],
                // "plugins": [
                //     [
                //       "@babel/plugin-transform-runtime",
                //       {
                //         "absoluteRuntime": false,
                //         "corejs": 2,
                //         "helpers": true,
                //         "regenerator": true,
                //         "useESModules": false
                //       }
                //     ]
                //   ]
                // }
            },
            {
                test:/\.css$/,
                loader:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8*1024
                        }
                    }, {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 75
                            },
                            optipng: {
                                enabled: true
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            hash:true,
            template:'./src/index.html',
            filename:'index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    // optimization:{
    //     usedExports:true, //在development模式下使用treeshaking
    // }
}