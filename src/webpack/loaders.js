var path = require('path'),
    projectRootPath=path.resolve(__dirname, '..'),
    appPath=path.join(projectRootPath,'app');
var ExtractTextPlugin=require("extract-text-webpack-plugin");
module.exports=[{
    test: /\.jsx?$/,
    include:appPath,
    loader: 'babel?cacheDirectory=true'
},{
    test: /\.tsx?$/,
    include:appPath,
    loader: 'ts'
},{
    test: /\.css$/,
    include:path.join(projectRootPath,'assets/css/'),
    loader:  ExtractTextPlugin.extract("style", "css?sourceMap!postcss")
},{
    test: /\.css$/,
    include:appPath,
    exclude:path.join(appPath,'style'),
    loader: "style!css?module&localIdentName=[name]__[local]___[hash:base64:5]!postcss"
},{
    test: /\.css$/,
    include: path.join(appPath,'style'),
    loader: 'style!css'
},{
    test: /\.css$/,
    include: /node_modules/,
    loader: 'style!css'
},{
    test: /\.(png|jpe?g|gif)$/,
    loader: 'url',
    query: {
        limit: 5000,
        name: '[hash:5].[name].[ext]'
    }
},{
    test: /\.(svg|woff2?|eot|ttf|otf)(\?.*)?$/,
    loader: 'url?limit=10240'
}]