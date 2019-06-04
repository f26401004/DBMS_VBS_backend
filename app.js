require("@babel/register")({
  presets: ["@babel/preset-env"],
  plugins: [
    "@babel/plugin-proposal-class-properties"
  ]
})
require("@babel/polyfill")

module.exports = require('./server.js')
