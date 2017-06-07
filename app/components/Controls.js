import React, {Component} from 'react'
import PropTypes from 'prop-types'


'use strict'
export default class Controls extends Component {

/*-----------------------------------------------*/
	onStatusChange = (newStatus) => {
		/*currying: the function returns a function
		generator */
		return () => {
			this.props.onStatusChange(newStatus)
		}
	}

/*-----------------------------------------------*/
	renderStartStopButton = () => {	
		let {countDownStatus} = this.props

		if(countDownStatus === 'started') {
			return <button className="btn btn-secondary btn-lg" 
			onClick={this.onStatusChange('paused')}>Pause</button>

		} else  {
			return <button className="btn btn-success btn-lg" 
			onClick={this.onStatusChange('started')}>Start</button>
		}
	}

/*-----------------------------------------------*/
	render(){
		return(
			<div className="controls-container">
				{this.renderStartStopButton()}

				<button className="btn btn-danger btn-lg btn-outline" 
				onClick={this.onStatusChange('stopped')}>Clear</button>

			</div>
		)
	}
}

/*-----------------------------------------------*/
Controls.defaultProps = {
	countDownStatus: 'stopped'
}
Controls.propType = {
	countDownStatus: PropTypes.string.isRequired,
	onStatusChange: PropTypes.func.isRequired,

}