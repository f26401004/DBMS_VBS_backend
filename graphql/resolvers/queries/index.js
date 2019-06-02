export default {
  users: async (parent, args, context, info) => {
    const data = await context.db.Users.findAll()
    return data
  },
  cards: async (parent, args, context, info) => {
    const data = await context.db.Cards.findAll()
    return data
  },
  cardTypes: async (parent, args, context, info) => {
    const data = await context.db.CardTypes.findAll()
    return data
  },
  transactionTypes: async (parent, args, context, info) => {
    const data = await context.db.TransactionTypes.findAll()
    return data
  },
  transactions: async (parent, args, context, info) => {
    const data = await context.db.Transactions.findAll()
    return data
  },
  insuranceTypes: async (parent, args, context, info) => {
    const data = await context.db.InsuranceTypes.findAll()
    return data
  },
  insurances: async (parent, args, context, info) => {
    const data = await context.db.Insurances.findAll()
    return data
  },
  insurancePayments: async (parent, args, context, info) => {
    const data = await context.db.InsurancePayments.findAll()
    return data
  },
  deposits: async (parent, args, context, info) => {
    const data = await context.db.Deposits.findAll()
    return data
  },
  depositTypes: async (parent, args, context, info) => {
    const data = await context.db.DepositTypes.findAll()
    return data
  },
  depositPayments: async (parent, args, context, info) => {
    const data = await context.db.DepositPayments.findAll()
    return data
  },
  costs: async (parent, args, context, info) => {
    const data = await context.db.Costs.findAll()
    return data
  }
}