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
          permission: args.permission ? args.permission : target.permission,
          sex: args.sex ? args.sex : target.sex
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
          type: args.type ? args.type : target.type
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
          name: args.name ? args.name : target.name,
          terms: args.terms ? args.terms : target.terms,
          interestRate: args.interestRate ? args.interestRate : target.interestRate,
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
  updateInsurancePayments: async (parent, args, context, info) => {
    try {
      const target = await context.db.InsurancePayments.findAll({
        where: {
          id: args.key
        }
      })
      await context.instance.transaction(t => {
        // update the data
        return context.db.InsurancePayments.update({
          id: args.id ? args.id : target.id,
          deadline: args.deadline ? args.deadline : target.deadline,
          term: args.term ? args.term : target.term,
          status: args.status ? args.status : target.status
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
          interestType: args.interestType ? args.interestType : target.interestType,
          terms: args.terms ? args.terms : target.terms,
          amount: args.amount ? args.amount : target.amount
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
          floatingInterest: args.floatingInterest ? args.floatingInterest : target.floatingInterest,
          fixedInterest: args.fixedInterest ? args.fixedInterest : target.fixedInterest
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
  updateDepositPayments: async (parent, args, context, info) => {
    try {
      const target = await context.db.DepositPayments.findAll({
        where: {
          id: args.key
        }
      })
      await context.instance.transaction(t => {
        // update the data
        return context.db.DepositPayments.update({
          id: args.id ? args.id : target.id,
          deadline: args.deadline ? args.deadline : target.deadline,
          term: args.term ? args.term : target.term,
          status: args.status ? args.status : target.status
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
  updateCosts: async (parent, args, context, info) => {
    try {
      const target = await context.db.Costs.findOne({
        where: {
          id: args.key
        }
      })
      await context.instance.transaction(t => {
        // update the data
        return context.db.Costs.update({
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