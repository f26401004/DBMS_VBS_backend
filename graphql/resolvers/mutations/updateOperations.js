export default {
  updateUsers: async (parent, args, context, info) => {
    try {
      const target = await context.dataloaders.users.load(args.key)
      await context.instance.transaction(t => {
        // update the data
        return context.db.Users.update({
          username: args.username ? args.username : target.username,
          authCode: args.authCode ? args.authCode : target.authCode,
          SSN: args.SSN ? args.SSN : target.SSN,
          permission: args.permission ? args.permission : target.permission
        }, {
          where: {
            username: args.key
          }
        })
      })
      return target
    } catch (error) {
      console.log(error)
    }
  },
  updateCards: async (parent, args, context, info) => {
    try {
      const target = await context.dataloaders.cards.load(args.key)
      await context.instance.transaction(t => {
        // update the data
        return context.db.Cards.update({
          cardNo: args.cardNo ? args.cardNo : target.cardNo,
          csc: args.csc ? args.csc : target.csc,
          type: args.type ? args.type : target.type,
          assets: args.assets ? args.assets : target.assets,
          owner: args.owner ? args.owner : target.owner
        }, {
          where: {
            cardNo: args.key
          }
        })
      })
      return target
    } catch (error) {
      console.log(error)
    }
  },
  updateCardTypes: async (parent, args, context, info) => {
    try {
      const target = await context.dataloaders.cardTypes.load(args.key)
      await context.instance.transaction(t => {
        // update the data
        return context.db.CardTypes.update({
          id: args.id ? args.id : target.id,
          name: args.name ? args.name : target.name
        }, {
          where: {
            id: args.key
          }
        })
      })
      return target
    } catch (error) {
      console.log(error)
    }
  },
  updateTransactions: async (parent, args, context, info) => {
    try {
      const target = await context.dataloaders.transcations.load(args.key)
      await context.instance.transaction(t => {
        // update the data
        return context.db.Transactions.update({
          id: args.id ? args.id : target.id,
          userCard: args.userCard ? args.userCard : target.userCard,
          targetCard: args.targetCard ? args.targetCard : target.targetCard,
          type: args.type ? args.type : target.type,
          value: args.value ? args.value : target.value
        }, {
          where: {
            id: args.key
          }
        })
      })
      return target
    } catch (error) {
      console.log(error)
    }
  },
  updateTransactionTypes: async (parent, args, context, info) => {
    try {
      const target = await context.dataloaders.transactionTypes.load(args.key)
      await context.instance.transaction(t => {
        // update the data
        return context.db.TransactionTypes.update({
          id: args.id ? args.id : target.id,
          name: args.name ? args.name : target.name
        }, {
          where: {
            id: args.key
          }
        })
      })
      return target
    } catch (error) {
      console.log(error)
    }
  },
  updateInsurances: async (parent, args, context, info) => {
    try {
      const target = await context.dataloaders.insurances.load(args.key)
      await context.instance.transaction(t => {
        // update the data
        return context.db.Insurances.update({
          id: args.id ? args.id : target.id,
          user: args.user ? args.user : target.user,
          type: args.type ? args.type : target.type,
          term: args.term ? args.term : target.term,
          paid: args.paid ? args.paid : target.paid
        }, {
          where: {
            id: args.key
          }
        })
      })
      return target
    } catch (error) {
      console.log(error)
    }
  },
  updateInsuranceTypes: async (parent, args, context, info) => {
    try {
      const target = await context.dataloaders.insuranceTypes.load(args.key)
      await context.instance.transaction(t => {
        // update the data
        return context.db.InsuranceTypes.update({
          id: args.id ? args.id : target.id,
          name: args.name ? args.name : target.name
        }, {
          where: {
            id: args.key
          }
        })
      })
      return target
    } catch (error) {
      console.log(error)
    }
  },
  updateDeposits: async (parent, args, context, info) => {
    try {
      const target = await context.dataloaders.deposits.load(args.key)
      await context.instance.transaction(t => {
        // update the data
        return context.db.Deposits.update({
          id: args.id ? args.id : target.id,
          user: args.user ? args.user : target.user,
          type: args.type ? args.type : target.type,
          term: args.term ? args.term : target.term,
          paid: args.paid ? args.paid : target.paid
        }, {
          where: {
            id: args.key
          }
        })
      })
      return target
    } catch (error) {
      console.log(error)
    }
  },
  updateDepositTypes: async (parent, args, context, info) => {
    try {
      const target = await context.dataloaders.depositTypes.load(args.key)
      await context.instance.transaction(t => {
        // update the data
        return context.db.DepositTypes.update({
          id: args.id ? args.id : target.id,
          name: args.name ? args.name : target.name,
          floating_interest: args.floating_interest ? args.floating_interest : target.floating_interest,
          fixed_interest: args.fixed_interest ? args.fixed_interest : target.fixed_interest
        }, {
          where: {
            id: args.key
          }
        })
      })
      return target
    } catch (error) {
      console.log(error)
    }
  },
  updateInterestRates: async (parent, args, context, info) => {
    try {
      const target = await context.db.InterestRates.findOne({
        where: {
          id: args.key
        }
      })
      await context.instance.transaction(t => {
        // update the data
        return context.db.InterestRates.update({
          id: args.id ? args.id : target.id,
          name: args.name ? args.name : target.name,
          value: args.value ? args.value : target.value
        }, {
          where: {
            id: args.key
          }
        })
      })
      return target
    } catch (error) {
      console.log(error)
    }
  }
}