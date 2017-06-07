import React, {Component} from 'react'
import PropTypes from 'prop-types'


'use strict'
export default class Controls extends Component {

	renderStartStopButton = () => {	
		let {countDownStatus} = this.props
		if(countDownStatus === 'started') {
			return <button className="btn btn-lg btn-secondary ">Pause</button>
		} else if (countDownStatus == 'paused') {
			return <button className="btn btn-lg btn-primary">Start</button>
		}
	}
	/*-----------------------------------------------*/
	render(){
		return(
			<div className="controls-container">
				{this.renderStartStopButton()}
				<button className="btn btn-danger btn-lg outline">Clear</button>
			</div>
		)
	}
}

/*-----------------------------------------------*/
Controls.defaultProps = {
	countDownStatus: 'stopped'
}
Controls.propType = {
	countDownStatus: PropTypes.string.isRequired
}