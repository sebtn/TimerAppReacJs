import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
// import Clock from '/home/seb/Sites/timerApp/app/components/Clock.js'
// import Clock from '../../../app/components/Clock.js' 
import Clock from '../../components/Clock.js' 
import $ from 'jquery'

'use strict'
const TestUtils  = require('react-addons-test-utils')

/*Test Clock component behavior*/
describe('Clock, methods and render', () => {

	it('Test Clock #1: Clock should exists', () => {
		expect(Clock).toExist()
	})

	it('Test clock #2: formatSeconds method should format time', () => {
		/*Mocks component*/
		let clock = TestUtils.renderIntoDocument(<Clock />)
		let seconds = 615
		let expected = '10:15'
		let actual = clock.formatSeconds(seconds)

		expect(actual).toBe(expected)
	})

	it('Test #3: formatSeconds method should format number under 10' , () => {
		/*Mocks component*/
		let clock = TestUtils.renderIntoDocument(<Clock />)
		let seconds = 61
		let expected = '01:01'
		let actual = clock.formatSeconds(seconds)

		expect(actual).toBe(expected)
	})

	it('Test #4: Should render clock to output ', () => {
		/*Mocks component*/
		let clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>)
		let $el = $(ReactDOM.findDOMNode(clock))
		let actualText = $el.find('.clock-text').text()

		expect(actualText).toBe('01:02')
	})

})

