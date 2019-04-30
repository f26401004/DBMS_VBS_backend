const model = require('../models')

module.exports = {
  Query: {
    hello: () => 'world',
    users: (parent, args, context, info) => context.db.Users.findAll(),
    transactions: (parent, args, context, info) => context.db.Transactions.findAll(),
    insurances: (parent, args, context, info) => context.db.Insurances.findAll()
  }
}