import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Clock from './Clock'

import CountDownForm from './CountDownForm'

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
			}
		}
	}  

/*-------------------------------------------------------*/
	handleSetCountDown = (seconds) => {
		this.setState({count: seconds, countDownStatus: 'started'})
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