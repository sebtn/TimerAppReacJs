import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Clock from './Clock'

'use strict'
export default class Counter extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		return (
			<div className="count-container">
				<Clock totalSeconds={125}></Clock>
			</div>
		)
	}
} 