import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import {Route, Router, IndexRoute, hashHistory, Link} from 'react-router'
import Main from '././components/Main'
import Counter from '././components/Counter'
import Timer from '././components/Timer'
import  '././styles/app.scss' 

'use strict'

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main} >
			<Route path="counter" component={Counter} />
			{/*IndexRoute is for default route, when nothing is selected*/}
			<IndexRoute component={Timer} />
		</Route>		
	</Router>,
	document.getElementById('root')
)