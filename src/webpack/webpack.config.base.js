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
        require('cssnano')(),
        require('autoprefixer')({browsers: ['last 2 versions']})
        // require('postcss-pxtorem')(util.pxToRemOptions(75))
    ],
    resolve: {
        extensions: ['', '.js', '.scss', '.css', '.jsx','.ts','.tsx']
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