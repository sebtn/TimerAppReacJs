import React, {Component} from 'react'
import PropTypes from 'prop-types'


'use strict'
export default class Counter extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		return (
			<div className="Count-container">
				<h1>Rendered in count</h1>
			</div>
		)
	}
} 