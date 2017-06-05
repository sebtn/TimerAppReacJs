import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
// import Clock from '/home/seb/Sites/timerApp/app/components/Clock.js'
// import Clock from '../../../app/components/Clock.js' 
import Clock from '../../components/Clock.js' 
'use strict'
const TestUtils  = require('react-addons-test-utils')



describe('Clock', () => {

	it('Test Clock #1: Clock should exists', () => {
		expect(Clock).toExist()
	})

})