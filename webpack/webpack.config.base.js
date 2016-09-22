var webpack=require('webpack'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    path = require('path');
var config=require('../config');
var util=require('./util');
var loaders=require('./loaders')
var baceConfig = {
    cache: true,
    entry:util.getEntrys(util.isDev,config.entrys),
    output: {
        path:config.outputPath ,
        chunkFilename: '[name].chunk.js',
        filename: '[name].min.js'
    },
    module: {
        noParse: util.noParse,
        loaders: loaders
    },
    postcss: [
        require('precss')(),
        require('postcss-import'),
        /*
        可以配置'ie 6-8'或者'> 1%'或者'last 2 versions'
         */
        require('autoprefixer')({ browsers: ['last 2 versions'] }),
        require('cssnano')(),
        // require('postcss-pxtorem')(util.pxToRemOptions(75))
    ],
    resolve: {
        extensions: ['', '.js','.less','.scss', '.css', '.jsx','.ts','.tsx','.es6']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename:'vendor.min.js',
            minChunks: Infinity
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new ExtractTextPlugin("[name].min.css",{allChunks: true})
    ]
}
if(config.eslint){
    baceConfig.eslint={
        configFile: './.eslintrc.js'
    }
    baceConfig.module.preLoaders=[{
        test: /\.jsx?$/,
        loader: 'eslint',
        include:path.join(__dirname,'..', 'app')
    }]
}
module.exports=baceConfig