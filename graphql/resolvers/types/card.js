export default {
  owner: async (parent, args, context, info) => {
    const owner = parent.dataValues.owner
    const data = await context.dataloaders.users.load(owner)
    return data
  },
  type: async (parent, args, context, info) => {
    const id = parent.dataValues.type 
    const data = await context.dataloaders.cardTypes.load(id)
    return data
  },
  transactions: async (parent, args, context, info) => {
    const data = await parent.getTransactions()
    return data
  }
}