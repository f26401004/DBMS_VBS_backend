export default {
  user: async (parent, args, context, info) => {
    let username = parent.dataValues.user
    const data = await context.dataloaders.users.load(username)
    return data
  },
  type: async (parent, args, context, info) => {
    let id = parent.dataValues.type
    const data = await context.dataloaders.cardTypes.load(id)
  }
}