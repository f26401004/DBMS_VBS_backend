export default {
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
  }
}