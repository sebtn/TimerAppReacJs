import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import {Route, Router, IndexRoute, hashHistory, Link} from 'react-router'
import Main from '././components/Main'
import Counter from '././components/Counter'
import Timer from '././components/Timer'
import  './app.scss' 

'use strict'

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main} >
			<Route path="Counter" component={Counter} />
			<Route path="Timer" component={Timer} />
			<IndexRoute></IndexRoute>
		</Route>		
	</Router>,
	document.getElementById('root')
)