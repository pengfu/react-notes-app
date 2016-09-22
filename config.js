var path = require('path')

module.exports={
    entrys:{
        app:path.join(__dirname,'/app/')
    },
    outputPath:path.join(__dirname,'/dist/'),
    publicPath:'/admin/Tpl/dist/',
    //是否开启代码校验,默认开启
    eslint:false,
    /*
    是否引用'babel-polyfill'
    如果想使用es6/7的新增API如(await/async)等就开启
    */
    babel_polyfill:true,
    port:9090,
    //http代理
    proxyTable:{
        '/admin':'http://saasadmintest.hljnbw.cn:800'
    }
}