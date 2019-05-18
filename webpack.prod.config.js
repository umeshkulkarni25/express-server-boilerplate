const path = require('path')
const Dotenv = require('dotenv-webpack')
module.exports = {
  mode: "production",
  entry: [
    './server.js'
  ],
  target: 'node',
  module: {
    rules: [{
      test: /\.js?$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  plugins: [
    new Dotenv({path:'./.env.prod'})
  ],
  output: {
    path: path.join(__dirname, 'prod'),
    filename: 'server.js'
  }
}
