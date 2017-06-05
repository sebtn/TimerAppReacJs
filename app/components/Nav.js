import React, {Component} from 'react'
import {IndexLink, Link} from 'react-router'

'use strict'
export default class Nav extends Component {
	constructor() {
		super()
		this.state = {}
	}

	render() {
		return (
			<div className="nav-container">
				<nav className="nav nav-pills flex-column flex-md-row justify-content-center">
				<li className="nav-item">
				  <IndexLink className="flex-sm-fill text-sm-center nav-link title disabled" to="/">Timer App build on ReactJs</IndexLink>
				</li>
				  <li className="nav-item">
				  <IndexLink className="flex-sm-fill text-sm-center nav-link counter" to="/Counter">Counter</IndexLink>
				  </li>
				  <li className="nav-item">
				  <IndexLink className="flex-sm-fill text-sm-center nav-link timer" to="/Timer">Timer</IndexLink>
				  </li>
				  <li className="nav-item">
				  <IndexLink className="flex-sm-fill text-sm-center nav-link author" to="/">Seb made.this</IndexLink>
				  </li>
				</nav>
			</div>
		)
	}
}
