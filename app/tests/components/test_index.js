import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
import $ from 'jquery'

import Clock from '../../components/Clock.js' 
import Counter from '../../components/Counter.js' 
import CountDownForm from '../../components/CountDownForm.js' 


'use strict'
/*require all modules ending in "_test" from the
current directory and all subdirectories*/
let testsContext = require.context(".", true, /_test$/)
testsContext.keys().forEach(testsContext)
const TestUtils  = require('react-addons-test-utils')

/*Begin testing*/
describe('TestApp #1: Test App is testable', () => {

	it('Test App #1: it should properly run tests', () => {
		expect(1).toBe(1)
	})

})

describe('Counter Component Testing', () => {

	it('Test Counter #1: Counter component should exist', () => {
		expect(Counter).toExist()
	})

/*done lets mocha to run async test*/
	it('Test Counter #2: handleSetCountDown should setState to started and counter works ', (done) => {
		let counter =TestUtils.renderIntoDocument(<Counter />)
		counter.handleSetCountDown(10)

		expect(counter.state.count).toBe(10)
		expect(counter.state.countDownStatus).toBe('started')
		/*check if counter works*/
		setTimeout( () => {
			expect(counter.state.count).toBe(9)
			done()
		}, 1001 ) 
	})

	/*done lets mocha to run async test*/
		it('Test Counter #3: handleSetCountDown handles count not to be negative ', (done) => {
			let counter =TestUtils.renderIntoDocument(<Counter />)
			counter.handleSetCountDown(1)

			/*check if counter is always zero or positive*/
			setTimeout( () => {
				expect(counter.state.count).toBe(0)
				done()
			}, 3000 ) 
		})

})

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
/*Test Clock component behavior*/
describe('Clock, methods and render', () => {

	it('Test Clock #1: Clock should exists', () => {
		expect(Clock).toExist()
	})

	it('Test Clock #2: formatSeconds method should format time', () => {
		/*Render a React element into a detached DOM*/
		let clock = TestUtils.renderIntoDocument(<Clock />)
		let seconds = 615
		let expected = '10:15'
		let actual = clock.formatSeconds(seconds)

		expect(actual).toBe(expected)
	})

	it('Test Clock #3: formatSeconds method should format number under 10' , () => {
		/*Render a React element into a detached DOM*/
		let clock = TestUtils.renderIntoDocument(<Clock />)
		let seconds = 61
		let expected = '01:01'
		let actual = clock.formatSeconds(seconds)

		expect(actual).toBe(expected)
	})

	it('Test Clock #4: Clock component should render clock to output ', () => {
		/*Render a React element into a detached DOM*/
		let clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>)
		let el = $(ReactDOM.findDOMNode(clock))
		let actualText = el.find('.clock-text').text()

		expect(actualText).toBe('01:02')
	})

})

