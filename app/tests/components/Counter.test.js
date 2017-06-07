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
