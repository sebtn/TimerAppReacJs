import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Clock from './Clock'
import CountDownForm from './CountDownForm'

'use strict'
export default class Counter extends Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 0
		}
	}

/*-------------------------------------------------------*/
	handleSetCountDown = (seconds) => {
		this.setState({count: seconds})
	}

/*-------------------------------------------------------*/
	render() {
		let {count} = this.state
		return (
			<div >
				<Clock totalSeconds={count}></Clock>
				<CountDownForm onSetCountDown={this.handleSetCountDown}></CountDownForm>				
			</div>
		)
	}
} 