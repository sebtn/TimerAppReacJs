import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Nav from './Nav'

'use strict'
export default class Main extends Component {
	constructor() {
		super()
		this.state = {}
	}
	render() {
		return (
			<div className="">
				<Nav></Nav>
			</div>
		)
	}
} 