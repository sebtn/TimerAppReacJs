import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
import $ from 'jquery'

/*Import Components for testing*/
import Clock from '../../components/Clock.js' 
import Counter from '../../components/Counter.js' 
import CountDownForm from '../../components/CountDownForm.js' 
import Controls from '../../components/Controls.js' 
import Timer from '../../components/Timer.js' 

'use strict'
/*require all modules ending in "_test" from the
current directory and all subdirectories*/
let testsContext = require.context(".", true, /_test$/)
testsContext.keys().forEach(testsContext)
const TestUtils  = require('react-addons-test-utils')

/*--------------------------------------------------
------------  TEST FOR COMPONENETS   ---------------
---------------------------------------------------*/
describe('TestApp #1: Test App is testable', () => {

	it('Test App #1: it should properly run tests', () => {
		expect(1).toBe(1)
	})

})
/*-----------------Controls Component  Testing-----------------------*/
describe('Controls Component Testing', () => {

	it('Test Controls #1: Controls component should exist', ()=> {
		expect(Controls).toExist()
	})

	it('Test Controls #2: Controls component should render paused when started', ()=> {
		let controls = TestUtils.renderIntoDocument(<Controls countDownStatus='started' />)
		let el = $(ReactDOM.findDOMNode(controls))
		let pauseButton = el.find('button:contains(Pause)')

		expect(pauseButton.length).toBe(1)
	})

	it('Test Controls #3: Controls component should render started when paused', ()=> {
		let controls = TestUtils.renderIntoDocument(<Controls countDownStatus='paused'/>)
		let el = $(ReactDOM.findDOMNode(controls))
		let startButton = el.find('button:contains(Start)')

		expect( startButton.length).toBe(1)
	})

})

/*-------------Counter Component Testing-----------------------------*/
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

		/*done as arg lets mocha run a-sync test*/
		it('Test Counter #4: should pause on paused status ', (done) => {
			let counter = TestUtils.renderIntoDocument(<Counter />)
			counter.handleSetCountDown(3)
			counter.handelSatusChange('paused')
			/*after a second it should remain paused and 
			count is still the same 3 */
			setTimeout( () => {
				expect(counter.state.count).toBe(3)
				expect(counter.state.countDownStatus).toBe('paused')
				done()
			}, 1001)
		})

		/*done as arg lets mocha run a-sync test*/
		it('Test Counter #5: should stop on stopped status ', (done) => {
			let counter = TestUtils.renderIntoDocument(<Counter />)
			counter.handleSetCountDown(3)
			counter.handelSatusChange('stopped')
			/*after a second it should remain stopped and 
			count is now zero */
			setTimeout( () => {
				expect(counter.state.count).toBe(0)
				expect(counter.state.countDownStatus).toBe('stopped')
				done()
			}, 1001)
		})

})

/*------------Count down form Component testing---------------------*/
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

/*-------------Testing Clock component------------------------------*/
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

/*---------------------Timer Tests-------------------------------------*/
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

})

