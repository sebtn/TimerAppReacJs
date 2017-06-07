import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
import $ from 'jquery'

import CountDownForm from '../../components/CountDownForm.js' 

'use strict'
const TestUtils  = require('react-addons-test-utils')

describe('Count Down Form Component Testing', () => {
	
	it('Test Count Down #1: Count Down Form should exist', () => {
		expect(CountDownForm).toExist()
	})

	it('Test Count Down #2: should call onSetCountDown when valid seconds entered om form', () => {
		let spy = expect.createSpy()
		/*Inject spy to be able to check if it gets called*/
		let countdownform = TestUtils.renderIntoDocument(<CountDownForm onSetCountDown={spy} />)
		let el = $(ReactDOM.findDOMNode(countdownform))

		countdownform.refs.seconds.value = '125'
		/*First dom node of form, simulate a submit*/
		TestUtils.Simulate.submit(el.find('form')[0])

		expect(spy).toHaveBeenCalledWith(125)
	})	

	it('Test Count Down #3: should NOT call onSetCountDown when inValid seconds entered om form', () => {
		let spy = expect.createSpy()
		/*Inject spy to be able to check if it gets called*/
		let countdownform = TestUtils.renderIntoDocument(<CountDownForm onSetCountDown={spy} />)
		let el = $(ReactDOM.findDOMNode(countdownform))

		countdownform.refs.seconds.value = 'A'
		/*First dom node of form, simulate a submit*/
		TestUtils.Simulate.submit(el.find('form')[0])
		/*Different from  above's method toHaveBeenCalledWith*/
		expect(spy).toNotHaveBeenCalled()
	})

})