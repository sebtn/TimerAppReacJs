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

})
