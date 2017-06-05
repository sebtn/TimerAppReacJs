import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Nav from './Nav'

'use strict'
export default class Main extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		return (
			<div className="">
				<Nav></Nav>
				<h1 className="className">Rendered in Main</h1>
				{this.props.children}
			</div>
		)
	}
} 