var webpackConfig = require('./webpack.config.js')

module.exports = function (config)  {
	config.set({
		basePath: '/',
		browsers: ['Chrome'],
		singleRun: true,
		frameworks: ['mocha'],
		files: ['app/tests/**/*.test.js'],
		preprocessors: {
			'app/tests/**/*.test.js': ['webpack', 'sourcemap']
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