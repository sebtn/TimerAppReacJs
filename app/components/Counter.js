import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Clock from './Clock'
import CountDownForm from './CountDownForm'
import Controls from './Controls'

'use strict'
export default class Counter extends Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 0,
			countDownStatus: 'stopped'
		}
	}

/*-------------------------------------------------------*/
	startTimer = () => {
		/*Way to keep re-trigger function after an amount of time*/
		this.timer = setInterval( () => {
			let newCount = this.state.count - 1
			this.setState({ count: newCount >= 0 ? newCount : 0 })
		}, 1000 ) 
	}

/*-------------------------------------------------------*/
	componentDidUpdate = (prevPorps, prevState) => {
		if(this.state.countDownStatus !== prevState.countDownStatus) {
			switch(this.state.countDownStatus) {
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
	handleSetCountDown = (seconds) => {
		this.setState({count: seconds, countDownStatus: 'started'})
	}

/*-------------------------------------------------------*/
	handelSatusChange = (newStatus) => {
		this.setState({countDownStatus: newStatus})
	}

/*-------------------------------------------------------*/
	renderControlArea = () => {
		let {count, countDownStatus} = this.state		

		if(countDownStatus !== 'stopped') {
			return <Controls countDownStatus={countDownStatus} 
			onStatusChange={this.handelSatusChange} />
		} else {
			return <CountDownForm onSetCountDown={this.handleSetCountDown} />		
		}
	}

/*-------------------------------------------------------*/
	render() {
		let {count} = this.state		
		return ( 
			<div >
				<Clock totalSeconds={count}></Clock>
				{this.renderControlArea()}		
			</div>
		)
	}
} 