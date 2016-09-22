var webpack=require('webpack');
var webpackConfig=require('./webpack.config.base'),
    plugins=webpackConfig.plugins;
var util=require('./util');
var config=require('../config');
webpackConfig.output.publicPath=config.publicPath;
util.pushPlugins(plugins,[
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"',
        __DEV__:false,
        __polyfill__:config.babel_polyfill||false
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,
            drop_console:true,
            drop_debugger:true
        }
    }),
    //去除重复引用的模块代码,避免在最终生成的文件中出现重复的模块
    new webpack.optimize.DedupePlugin()
]);
module.exports=webpackConfig;