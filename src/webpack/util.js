var path=require('path'),
    polyfill=require('../config').babel_polyfill,
    vendors=require('./vendors'),
    port=require('../config').port||3000,
    nodeModulesPath=path.resolve(__dirname, '..','node_modules');
var util = {
    isDev:process.env.NODE_ENV!=='production',
    pushPlugins: function (plugins, newPlugins) {
        var len = newPlugins.length
        for (var i = 0; i < len; i++) {
            plugins.push(newPlugins[i])
        }
    },
    pxToRemOptions: function (rootValue) {
        var propWhiteList = [
            'width', 'margin', 'margin-right',
            'margin-left', 'margin-top', 'margin-bottom',
            'padding', 'padding-right', 'padding-left',
            'padding-top', 'padding-bottom', 'top',
            'left', 'right', 'bottom'
        ];
        return {
            /*
             rootValue,取决于设计稿是按照什么设备的尺寸来设计的，
             那这就是对应于为该尺寸媒体查询@media的那个html font-size值
             */
            rootValue: rootValue,
            unitPrecision: 5,//保留几位小数点
            propWhiteList: propWhiteList,
            selectorBlackList: [],
            replace: true,
            /*
             在media中的px是否也进行转换:
             @media only screen and (min-width: 1080px)
             */
            mediaQuery: false,
            minPixelValue: 0
        }
    },
    getEntrys:function (isDev,entrys) {
        Object.keys(entrys).forEach(function (entryName) {
            var entryPath=entrys[entryName],
                entryConfig=[]
            if(isDev){
                entryConfig.push('webpack-hot-middleware/client?reload=true')
            }
            if(polyfill){
                entryConfig.push('babel-polyfill')
            }
            entryConfig.push(entryPath)
            entrys[entryName]=entryConfig
        })
        entrys.vendor=vendors
        return entrys
    },
    noParse:[
        path.resolve(nodeModulesPath,'react/dist/react.js'),
        path.resolve(nodeModulesPath,'react-dom/dist/react-dom.js'),
        path.resolve(nodeModulesPath,'redux/dist/redux.js'),
        path.resolve(nodeModulesPath,'react-router/umd/ReactRouter.js'),
        path.resolve(nodeModulesPath,'classnames/index.js')
    ]
}
module.exports=util