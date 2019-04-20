const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
function resolve(dist){
    return path.resolve(__dirname,dist);
}
module.exports = {
    entry:'./src/index.js',
    output:{ 
        filename:'[name].[hash].js',
        path:path.resolve(__dirname,'dist'),
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                include:[resolve('src')],
                exclude:[resolve('node_modules')],
                options:{
                    "presets":[ "@babel/preset-env"],
                    plugins:{
                        babelrcRoots: [
                            // Keep the root as a root
                            ".",
                          
                            // Also consider monorepo packages "root" and load their .babelrc files.
                            "./../*"
                          ]
                    }
                }
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
    ],
    
}