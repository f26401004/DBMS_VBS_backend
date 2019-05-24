export default {
  user: async (parent, args, context, info) => {
    const username = parent.dataValues.user
    const data = await context.dataloaders.users.load(username)
    return data
  },
  type: async (parent, args, context, info) => {
    const type = parent.dataValues.type
    const data = await context.dataloaders.insuranceTypes.load(type)
    return data
  }
}