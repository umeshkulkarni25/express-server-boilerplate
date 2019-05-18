const webpack = require('webpack')
const path = require('path')
const NodemonPlugin = require('nodemon-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const Dotenv = require('dotenv-webpack')

module.exports = {
  mode: "development",
  entry: [
    './server.js'
  ],
  watch: true,
  target: 'node',
  externals: [nodeExternals({})],
  module: {
    rules: [{
      test: /\.js?$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  plugins: [
    new NodemonPlugin(),
    new Dotenv({path:'./.env.dev'})
  ],
  output: {
    path: path.join(__dirname, '.hmr'),
    filename: 'server.js'
  }
}
