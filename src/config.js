var path = require('path')
module.exports={
    entrys:{
        app:path.join(__dirname,'/app/')
    },
    outputPath:path.join(__dirname,'/dist/'),
    publicPath:'/dist/',
    //是否开启代码校验,默认开启
    eslint:true,
    /*
    是否引用'babel-polyfill'
    */
    babel_polyfill:true,
    //是否需要支持tab事件(onTouchTap),移动开发启用
    touchTap:true,
    port:3000,
    //http代理
    proxyTable:{
        '/p':'http://test.hunliji.com'
    }
}