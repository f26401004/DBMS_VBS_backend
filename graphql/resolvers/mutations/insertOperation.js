import cryptoRandomString from 'crypto-random-string'

export default {
  insertUsers: async (parent, args, context, info) => {
    try {
      // check if there is the same SSN
      const target = await context.dataloaders.users.load(args.SSN)
      if (target) {
        return target
      }
      const hashed = await context.db.Users.hash(args.password)
      const result = await context.db.Users.create({
        username: args.username,
        password: hashed,
        SSN: args.SSN,
        authCode: cryptoRandomString({ length: 20 }),
        permission: args.permission,
        sex: args.sex,
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
        insured: args.insured,
        beneficiary: args.beneficiary,
        type: args.type,
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
        value: args.value,
        terms: args.terms,
        interestRate: args.interestRate,
        createdBy: 'root',
        updatedBy: 'root'
      })
      return result
    } catch (error) {
      console.log(error)
    }
  },
  insertInsurancePayments: async (parent, args, context, info) => {
    try {
      const result = await context.db.InsurancePayments.create({
        id: args.id,
        deadline: args.deadline,
        term: args.term,
        status: args.status,
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
        interestType: args.interestType,
        terms: args.terms,
        amount: args.amount,
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
  insertDepositPayments: async (parent, args, context, info) => {
    try {
      const result = await context.db.DepositPayments.create({
        id: args.id,
        deadline: args.deadline,
        term: args.term,
        status: args.status,
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