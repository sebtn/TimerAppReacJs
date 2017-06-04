import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Route, Router, IndexRoute, hashHistory, Link} from 'react-router'
import  './app.scss' 

'use strict'

ReactDom.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<IndexRoute></IndexRoute>
		</Route>		
	</Router>,
	document.getElementById('root')
)