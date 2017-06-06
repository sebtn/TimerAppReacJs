import React, {Component} from 'react'
import {IndexLink, Link} from 'react-router'

'use strict'
export default class CountDownForm extends Component {

/*-------------------------------------------------------*/
	onSubmit = (e) => {
		e.preventDefault()
		let stringSeconds = this.refs.seconds.value 

		if(stringSeconds.match(/^[0-9]*$/)) {
			/*Clear value for refs so it can be used again*/
			this.refs.seconds.value = ''
			this.props.onSetCountDown(parseInt(stringSeconds, 10))
		}
	}

/*-------------------------------------------------------*/
	render() {
		return (
			<div className="countdown-form-container">
				<form ref='form' onSubmit={this.onSubmit} className="countdown-form">																														
					<div className="form-group">
						<input className="form-control" type="text" ref="seconds" placeholder="Enter time using seconds" />
						<button className="btn btn-primary btn-lg" type="submit">Start Countdown</button>
					</div>
				</form>
			</div>
		)
	}
}