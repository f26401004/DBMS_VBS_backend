require("@babel/register")({
  presets: ["@babel/preset-env"]
})
require("@babel/polyfill")

export default require('./server.js')
