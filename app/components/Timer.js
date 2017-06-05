import React, {Component} from 'react'
import PropTypes from 'prop-types'

'use strict'
export default class Timer extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		return (
			<div className="timer-container">
				<h1>Rendered timer</h1>
			</div>			
		)
	}
} 