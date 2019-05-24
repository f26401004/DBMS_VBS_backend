export default {
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