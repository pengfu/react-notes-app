var webpack=require('webpack')
var webpackConfig=require('./webpack.config.base'),
    plugins=webpackConfig.plugins;
var util=require('./util')
var config=require('../config');
webpackConfig.output.publicPath='/dist/'
util.pushPlugins(plugins,[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"development"',
        __DEV__:true,
        __TAP__:config.touchTap
    })
])
//cheap-source-map比较快
webpackConfig.devtool='cheap-source-map'//#eval-source-map
module.exports=webpackConfig