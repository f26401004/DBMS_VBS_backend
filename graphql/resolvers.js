
module.exports = {
  Transaction: {
    user: async function (parent, args, context, info) {
      let username = parent.dataValues.user
      const data = await context.dataloaders.users.load(username)
      return data
    },
    target: async function (parent, args, context, info) {
      username = parent.dataValues.target
      const data = await context.dataloaders.users.load(username)
      return data
    },
    type: async function (parent, args, context, info) {
      const data = await parent.getTransactionType()
      return data
    }
  },
  Insurance: {
    user: async function (parent, args, context, info) {
      let usernames = await parent.getUsers()
      usernames = usernames.map(target => target.username)
      const data = await context.dataloaders.users.loadMany(usernames)
      return data
    },
    type: async function (parent, args, context, info) {
      const data = await parent.getInsuranceType()
      return data
    }
  },
  User: {
    transactions: async function (parent, args, context, info) {
      let tids = await parent.getTransactions()
      tids = tids.map(target => target.tid)
      const data = await context.dataloaders.transactions.loadMany(tids)
      return data
    },
    insurances: async function (parent, args, context, info) {
      let itids = await parent.getInsurances()
      itids = itids.map(target => target.itid)
      const data = await context.dataloaders.insurances.loadMany(itids)
      return data
    },
  },
  Query: {
    users: async function (parent, args, context, info) {
      const data = await context.db.Users.findAll()
      return data
    },
    cards: async function (parent, args, context, info) {
      const data = await context.db.Cards.findAll()
      return data
    },
    cardTypes: async function (parent, args, context, info) {
      const data = await context.db.CardTypes.findAll()
      return data
    },
    transactionTypes: async function (parent, args, context, info) {
      const data = await context.db.TransactionTypes.findAll()
      return data
    },
    transactions: async function (parent, args, context, info) {
      const data = await context.db.Transactions.findAll()
      return data
    },
    insuranceTypes: async function (parent, args, context, info) {
      const data = await context.db.InsuranceTypes.findAll()
      return data
    },
    insurances: async function (parent, args, context, info) {
      const data = await context.db.Insurances.findAll()
      return data
    },
    deposits: async function (parent, args, context, info) {
      const data = await context.db.Deposits.findAll()
      return data
    },
    depositTypes: async function (parent, args, context, info) {
      const data = await context.db.DepositTypes.findAll()
      return data
    },
    interestRates: async function (parent, args, context, info) {
      const data = await context.db.InterestRates.findAll()
      return data
    }
  }
}