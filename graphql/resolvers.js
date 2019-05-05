
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
  Users: {
    count: async function (parent, args, context, info) {
      if (args.username) {
        const count = await context.db.Users.count({
          where: { 
            username: args.username
          }
        })
        return count
      }
      const count = await context.db.Users.count()
      return count
    },
    rows: async function (parent, args, context, info) {
      let data
      if (args.username) {
        data = await context.db.Users.findAll({
          where: {
            username: args.username
          }
        })
        return data
      }
      data = await context.db.Users.findAll()
      return data
    }
  },
  Query: {
    user: async function (parent, args, context, info) {
      const data = await context.db.Users.findOne({
        where: { username: args.username }
      })
      return data
    },
    users: async function (parent, args, context, info) {
      return context.db.Users
    },
    transactions: async function (parent, args, context, info) {
      const data = await context.db.Transactions.findAll()
      return data
    },
    insurances: async function (parent, args, context, info) {
      const data = await context.db.Insurances.findAll()
      return data
    }
  }
}