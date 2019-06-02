export default {
  deleteUsers: async (parent, args, context, info) => {
    try {
      // get the target
      const target = await context.dataloaders.users.loadMany(args.keys)
      // destroy the data
      await context.db.Users.destroy({
        where: {
          username: args.keys
        }
      })
      return target
    } catch (error) {
      console.log(error)
    }
  },
  deleteCards: async (parent, args, context, info) => {
    try {
      // get the target
      const target = await context.db.Cards.findAll({
        where: {
          id: args.keys
        }
      })
      // destroy the data
      await context.db.Cards.destroy({
        where: {
          id: args.keys
        }
      })
      return target
    } catch (error) {
      console.log(error)
    }
  },
  deleteCardTypes: async (parent, args, context, info) => {
    try {
      // get the target
      const target = await context.dataloaders.cardTypes.loadMany(args.keys)
      // destroy the data
      await context.db.CardTypes.destroy({
        where: {
          id: args.keys
        }
      })
      return target
    } catch (error) {
      console.log(error)
    }
  },
  deleteTransactions: async (parent, args, context, info) => {
    try {
      // get the target
      const target = await context.db.Transactions.findAll({
        where: {
          id: args.keys
        }
      })
      // destroy the data
      await context.db.Transactions.destroy({
        where: {
          id: args.keys
        }
      })
      return target
    } catch (error) {
      console.log(error)
    }
  },
  deleteTransactionTypes: async (parent, args, context, info) => {
    try {
      // get the target
      const target = await context.dataloaders.transactionTypes.loadMany(args.keys)
      // destroy the data
      await context.db.TransactionsTypes.destroy({
        where: {
          id: args.keys
        }
      })
      return target
    } catch (error) {
      console.log(error)
    }
  },
  deleteInsurances: async (parent, args, context, info) => {
    try {
      // get the target
      const target = await context.db.Insurances.findAll({
        where: {
          id: args.keys
        }
      })
      // destroy the data
      await context.db.Insurances.destroy({
        where: {
          id: args.keys
        }
      })
      return target
    } catch (error) {
      console.log(error)
    }
  },
  deleteInsuranceTypes: async (parent, args, context, info) => {
    try {
      // get the target
      const target = await context.dataloaders.insuranceTypes.loadMany(args.keys)
      // destroy the data
      await context.db.InsuranceTypes.destroy({
        where: {
          id: args.keys
        }
      })
      return target
    } catch (error) {
      console.log(error)
    }
  },
  deleteInsurancePayments: async (parent, args, context, info) => {
    try {
      // get the target
      const target = await context.db.InsurnacePayments.findAll({
        where: {
          id: args.keys
        }
      })
      // destroy the data
      await context.db.InsurancePayments.destroy({
        where: {
          id: args.keys
        }
      })
      return target
    } catch (error) {
      console.log(error)
    }
  },
  deleteDeposits: async (parent, args, context, info) => {
    try {
      // get the target
      const target = await context.db.Deposits.findAll({
        where: {
          id: args.keys
        }
      })
      // destroy the data
      await context.db.Deposits.destroy({
        where: {
          id: args.keys
        }
      })
      return target
    } catch (error) {
      console.log(error)
    }
  },
  deleteDepositTypes: async (parent, args, context, info) => {
    try {
      // get the target
      const target = await context.dataloaders.depositTypes.loadMany(args.keys)
      // destroy the data
      await context.db.DepositTypes.destroy({
        where: {
          id: args.keys
        }
      })
      return target
    } catch (error) {
      console.log(error)
    }
  },
  deleteDepositPayments: async (parent, args, context, info) => {
    try {
      // get the target
      const target = await context.db.DepositPayments.findAll({
        where: {
          id: args.keys
        }
      })
      // destroy the data
      await context.db.DepositPayments.destroy({
        where: {
          id: args.keys
        }
      })
      return target
    } catch (error) {
      console.log(error)
    }
  },
  deleteCosts: async (parent, args, context, info) => {
    try {
      // get the target
      const target = await context.db.Costs.findAll({
        where: {
          id: args.keys
        }
      })
      // destroy the data
      await context.db.Costs.destroy({
        where: {
          id: args.keys
        }
      })
      return target
    } catch (error) {
      console.log(error)
    }
  }
}