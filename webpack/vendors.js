var config=require('../config')
var vendors=[
	'react',
	'react-dom',
	'classnames',
	'whatwg-fetch',
	'mobx',
	'mobx-react',
]
if(config.babel_polyfill){
	vendors.push('babel-polyfill')
}
module.exports=vendors