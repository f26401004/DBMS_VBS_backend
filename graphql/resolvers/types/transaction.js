
export default {
  user: async (parent, args, context, info) => {
    let username = parent.dataValues.user
    const data = await context.dataloaders.users.load(username)
    return data
  },
  target: async (parent, args, context, info) => {
    username = parent.dataValues.target
    const data = await context.dataloaders.users.load(username)
    return data
  },
  type: async (parent, args, context, info) => {
    const type = parent.dataValues.type
    const data = await context.dataloaders.transactionTypes.load(type)
    return data
  }
}