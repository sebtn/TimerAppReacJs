import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
import $ from 'jquery'

import Timer from '../../components/Timer.js' 

'use strict'
const TestUtils  = require('react-addons-test-utils')

describe('Tests for Timer component', () => {

	it('Timer Test #1: it should verify timer exists ', () => {
		expect(Timer).toExist()
	})

	it('Timer test#2: should start timer on started status', (done) => {
			let timer = TestUtils.renderIntoDocument(<Timer />)

			timer.handleStatusChange('started')
			expect(timer.state.count).toBe(0)

			setTimeout( () => {
				expect(timer.state.timerStatus).toBe('started')
				expect(timer.state.count).toBe(1)
				done()
			}, 1000 )
	})	

	it('Timer test#3: should stop timer on stopped status', (done) => {
			let timer = TestUtils.renderIntoDocument(<Timer />)

			timer.setState({count: 10})
			timer.handleStatusChange('started')
			timer.handleStatusChange('stopped')

			setTimeout( () => {
				expect(timer.state.timerStatus).toBe('stopped')
				expect(timer.state.count).toBe(0)
				done()
			}, 1000 )
	})	

	it('Timer test#4: should pause timer on paused status', (done) => {
			let timer = TestUtils.renderIntoDocument(<Timer />)

			timer.setState({count: 10})
			timer.handleStatusChange('started')
			timer.handleStatusChange('paused')

			setTimeout( () => {
				expect(timer.state.timerStatus).toBe('paused')
				expect(timer.state.count).toBe(10)
				done()
			}, 1000 )
	})

})