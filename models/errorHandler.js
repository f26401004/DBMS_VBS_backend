module.exports = class ErrorHandler extends Error {
  constructor(type = 'Server Error', statusCode = 500, message = '', ...args) {
    super(message, ...args)
    this.message = message
    this.statusCode = statusCode
    this.type = type
  }
}