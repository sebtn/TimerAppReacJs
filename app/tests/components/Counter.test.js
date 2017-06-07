import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
import $ from 'jquery'

import Counter from '../../components/Counter.js' 

'use strict'
const TestUtils  = require('react-addons-test-utils')

describe('Counter Component Testing', () => {

	it('Test Counter #1: Counter component should exist', () => {
		expect(Counter).toExist()
	})

	/*done as arg lets mocha run a-sync test*/
	it('Test Counter #2: handleSetCountDown should setState to started and counter works ', (done) => {
		let counter =TestUtils.renderIntoDocument(<Counter />)
		counter.handleSetCountDown(10)

		expect(counter.state.count).toBe(10)
		expect(counter.state.countDownStatus).toBe('started')
		/*check if counter works, wait 1.1 seconds*/
		setTimeout( () => {
			expect(counter.state.count).toBe(9)
			done()
		}, 1001 ) 
	})

		/*done as arg lets mocha run a-sync test*/
		it('Test Counter #3: handleSetCountDown handles count not to be negative ', (done) => {
			let counter =TestUtils.renderIntoDocument(<Counter />)
			counter.handleSetCountDown(1)

			/*check if counter is always zero or positive, wait 3 seconds*/
			setTimeout( () => {
				expect(counter.state.count).toBe(0)
				done()
			}, 3000 ) 
		})

		/*done as arg lets mocha run a-sync test*/
		it('Test Counter #4: should pause on paused status ', (done) => {
			let counter = TestUtils.renderIntoDocument(<Counter />)
			counter.handleSetCountDown(3)
			counter.handleStatuschanged('paused')
			/*after a seconds it should remain paused and 
			count is still the same 3 */
			setTimeout( () => {
				expect(counter.state.count).toBe(3)
				expect(counter.state.countDownStatus).toBe('paused')
				done()
			}, 1001)
		})

		/*done as arg lets mocha run a-sync test*/
		it('Test Counter #4: should pause on paused status ', (done) => {
			let counter = TestUtils.renderIntoDocument(<Counter />)
			counter.handleSetCountDown(3)
			counter.handleStatuschanged('stopped')
			/*after a seconds it should remain stopped and 
			count is now zero */
			setTimeout( () => {
				expect(counter.state.count).toBe(0)
				expect(counter.state.countDownStatus).toBe('stopped')
				done()
			}, 1001)
		})


})
