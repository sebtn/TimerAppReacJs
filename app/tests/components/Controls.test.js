import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
import $ from 'jquery'

import Controls from '../../components/Controls.js' 

'use strict'
const TestUtils  = require('react-addons-test-utils')

describe('Controls Component Testing', () => {

	it('Test Controls #1: Controls component should exist', ()=> {
		expect(Controls).toExist()
	})

	it('Test Controls #2: Controls component Should render paused when started', ()=> {
		let controls = TestUtils.renderIntoDocument(<Controls countDownStatus='started'/>)
		let el = $(ReactDOM.findDOMNode(controls))
		let pauseButton = el.find('button:contains(Pause)')

		expect(pauseButton.length).toBe(1)
	})	

	it('Test Controls #3: Controls component Should render started when paused', ()=> {
		let controls = TestUtils.renderIntoDocument(<Controls countDownStatus='paused'/>)
		let el = $(ReactDOM.findDOMNode(controls))
		let startButton = el.find('button:contains(Start)')

		expect( startButton.length).toBe(1)
	})

})