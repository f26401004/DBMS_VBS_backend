
export default {
  userCard: async (parent, args, context, info) => {
    const cardNo = parent.dataValues.userCard
    const data = await context.dataloaders.cards.load(cardNo)
    return data
  },
  targetCard: async (parent, args, context, info) => {
    const cardNo = parent.dataValues.targetCard
    const data = await context.dataloaders.cards.load(cardNo)
    return data
  },
  type: async (parent, args, context, info) => {
    const type = parent.dataValues.type
    const data = await context.dataloaders.transactionTypes.load(type)
    return data
  }
}