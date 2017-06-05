import React, {Component} from 'react'
import {IndexLink, Link} from 'react-router'

'use strict'
const Nav = () => {
	return (
		<div className="nav-container">
			<nav className="nav  flex-column flex-md-row justify-content-center">
			<li className="nav-item">
			  <IndexLink className="flex-md-fill text-md-center nav-link title disabled" to="/">Timer App build on ReactJs</IndexLink>
			</li>
		  <li className="nav-item">
			  <IndexLink className="flex-md-fill text-md-center nav-link counter" to="/Counter">Counter</IndexLink>
		  </li>
		  <li className="nav-item">
			  <Link className="flex-md-fill text-md-center nav-link timer" to="/Timer">Timer</Link>
		  </li>
		  <li className="nav-item">
			  <IndexLink className="flex-md-fill text-md-center nav-link author" to="/">Author: Seb</IndexLink>
		  </li>
			</nav>
		</div>
	)
}
module.exports = Nav