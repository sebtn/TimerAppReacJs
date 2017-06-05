let path = require('path')
let webpack = require('webpack')

module.exports = {
  entry: [
    './app/app.js',
  ],
  output: {
    path: path.resolve( __dirname, 'public'),
    filename: 'bundle.js',
  },
  resolve: { 
    // root: [path.resolve(__dirname, 'app'), path.resolve(__dirname, 'node_modules')],
    // extensions: ['', '.js', 'jsx'],
    alias: {
      Main: 'app/components/Main.js',
      Nav: 'app/components/Nav.js',
      Timer: 'app/components/Timer.js',
      Counter: 'app/components/Counter.js',
      Clock: 'app/components/Clock.js',
    }
  },
  module: {
    loaders: [
      {
        test: /\.js|.jsx?$/,
        exclude:/node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ["babel-preset-es2015", "react", "babel-preset-stage-0" ]
        }
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
  // devtool: 'inline-source-map'
}