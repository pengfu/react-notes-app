var express = require('express'),
    webpack = require('webpack'),
    path = require('path'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    proxy = require('http-proxy-middleware'),
    webpackDevConfig = require('./webpack/webpack.config.dev'),
    compiler = webpack(webpackDevConfig);
    var config=require('./config'),
    port = config.port || 3000,
    proxyTable=config.proxyTable;
var app=express();
Object.keys(proxyTable).forEach(function (context) {
    var options = proxyTable[context]
    if (typeof options === 'string') {
        options = { target: options ,changeOrigin: true}
    }
    app.use(proxy(context, options))
})
app.use(webpackDevMiddleware(compiler , {
    noInfo: true,
    hot: true,
    publicPath: webpackDevConfig.output.publicPath,
    stats: {colors: true}
}));
app.use(webpackHotMiddleware(compiler));
// 处理HTML5 history API
// app.use(require('connect-history-api-fallback')())
app.use(express.static(path.join(__dirname, '/')));
app.get("*", function(req, res) {
    res.sendFile(__dirname + '/index.html')
});

app.listen(port, function(error) {
    if (error) {
        console.log(error)
    } else {
        console.log(`Listening on port:${port}`)
    }
})