import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Clock from './Clock'
import Controls from './Controls'


'use strict'
export default class Timer extends Component {
/*Timer is stateFull so use constructor object*/
	constructor(props) {
		super(props)
		this.state = {
			count: 0,
			timerStatus: 'stopped'
		}
	}

/*-------------------------------------------------------*/
	startTimer = () => {
		/*Way to keep re-trigger function after an amount of time*/
		this.timer = setInterval( () => {
			let newCount = this.state.count + 1
			this.setState({ count: newCount})
		}, 1000 ) 
	}

/*-------------------------------------------------------*/
	componentDidUpdate = (prevPorps, prevState) => {
		/*Used when something is changed in the component*/
		if(this.state.timerStatus !== prevState.timerStatus) {
			switch(this.state.timerStatus) {
				case 'started':
					this.startTimer()
					break
				case 'stopped':
					this.setState({count: 0})
				case 'paused':
					clearInterval(this.timer)
					this.timer = undefined
					break
			}
		}
	}  

/*-------------------------------------------------------*/
	handleStatusChange = (newStatus) => {
		this.setState({timerStatus: newStatus})
	}

/*-------------------------------------------------------*/
	render() {
		let {count, timerStatus} = this.state 
		return (
			<div className="timer-container">
				<h1 className="page-title">Timer App</h1>
				<Clock totalSeconds={count}></Clock>

				<Controls countDownStatus={timerStatus}
			onStatusChange={this.handleStatusChange} ></Controls>
			</div>			
		)
	}
} 