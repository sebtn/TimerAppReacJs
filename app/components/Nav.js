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
				  <IndexLink className="flex-sm-fill text-sm-center nav-link title disabled" href="#">Timer App build on ReactJs</IndexLink>
				  <IndexLink className="flex-sm-fill text-sm-center nav-link countdown" href="#">CountDown</IndexLink>
				  <IndexLink className="flex-sm-fill text-sm-center nav-link timer" href="#">Timer</IndexLink>
				  <IndexLink className="flex-sm-fill text-sm-center nav-link author" href="#">Seb made.this</IndexLink>
				</nav>
			</div>
		)
	}
}
