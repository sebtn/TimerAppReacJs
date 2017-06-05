let webpackConfig = require('./webpack.config.js')

'use strict'
module.exports = function (config)  {
	config.set({
		browsers: ['Chrome'],
		singleRun: true,
		frameworks: ['mocha'],
//		files: ['app/tests/**/*.test.js'],
	//	preprocessors: {
		//	'app/tests/**/*.test.js': ['webpack', 'sourcemap']
		//},
		files: ['app/tests/test_index.js'],
		preprocessors: {
			'app/tests/test_index.js': ['webpack', 'sourcemap']
		},
		reporters: ['mocha'],
		client: {
			mocha: {
				timeout: '6500'
			}
		},
		webpack: webpackConfig,
		webpackServer:{
			noInfo: true
		}
	})
}