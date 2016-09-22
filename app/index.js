import 'whatwg-fetch'
import 'antd/dist/antd.min.css'
import './style/antd/index.css'
import './style/index.css'
import React from 'react'
import {render} from 'react-dom'
import App from './container/App'
render(
	<App/>,
	document.getElementById('react-root')
)