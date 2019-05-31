import cryptoRandomString from 'crypto-random-string'

export default {
  insertUsers: async (parent, args, context, info) => {
    try {
      const hashed = await context.db.Users.hash(args.password)
      const result = await context.db.Users.create({
        username: args.username,
        password: hashed,
        SSN: args.SSN,
        authCode: cryptoRandomString({ length: 20 }),
        permission: args.permission,
        createdBy: 'root',
        updatedBy: 'root'
      })
      return result
    } catch (error) {
      console.log(error)
    }
  },
  insertCards: async (parent, args, context, info) => {
    try {
      const result = await context.db.Cards.create({
        cardNo: args.cardNo,
        csc: args.csc,
        type: args.type,
        assets: args.assets,
        owner: args.owner,
        createdBy: 'root',
        updatedBy: 'root'
      })
      return result
    } catch (error) {
      console.log(error)
    }
  },
  insertCardTypes: async (parent, args, context, info) => {
    try {
      const result = await context.db.CardTypes.create({
        id: args.id,
        name: args.name,
        createdBy: 'root',
        updatedBy: 'root'
      })
      return result
    } catch (error) {
      console.log(error)
    }
  },
  insertTransactionTypes: async (parent, args, context, info) => {
    try {
      const result = await context.db.TransactionTypes.create({
        id: args.id,
        name: args.name,
        createdBy: 'root',
        updatedBy: 'root'
      })
      return result
    } catch (error) {
      console.log(error)
    }
  },
  insertInsurances: async (parent, args, context, info) => {
    try {
      const result = await context.db.Insurances.create({
        id: args.id,
        user: args.user,
        type: args.type,
        term: args.term,
        paid: args.paid,
        createdBy: 'root',
        updatedBy: 'root'
      })
      return result
    } catch (error) {
      console.log(error)
    }
  },
  insertInsuranceTypes: async (parent, args, context, info) => {
    try {
      const result = await context.db.InsuranceTypes.create({
        id: args.id,
        name: args.name,
        interest_rate: args.interest_rate,
        createdBy: 'root',
        updatedBy: 'root'
      })
      return result
    } catch (error) {
      console.log(error)
    }
  },
  insertDeposits: async (parent, args, context, info) => {
    try {
      const result = await context.db.Deposits.create({
        id: args.id,
        user: args.user,
        type: args.type,
        term: args.term,
        paid: args.paid,
        createdBy: 'root',
        updatedBy: 'root'
      })
      return result
    } catch (error) {
      console.log(error)
    }
  },
  insertDepositTypes: async (parent, args, context, info) => {
    try {
      const result = await context.db.DepositTypes.create({
        id: args.id,
        name: args.name,
        createdBy: 'root',
        updatedBy: 'root'
      })
      return result
    } catch (error) {
      console.log(error)
    }
  },
  insertCosts: async (parent, args, context, info) => {
    try {
      const result = await context.db.Costs.create({
        id: args.id,
        name: args.name,
        value: args.value,
        createdBy: 'root',
        updatedBy: 'root'
      })
      return result
    } catch (error) {
      console.log(error)
    }
  }
}