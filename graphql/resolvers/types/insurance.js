export default {
  user: async (parent, args, context, info) => {
    const user = parent.dataValues.user
    const data = await context.dataloaders.users.load(user)
    return data
  },
  type: async (parent, args, context, info) => {
    const id = parent.dataValues.type
    const data = await context.dataloaders.insuranceTypes.load(id)
    return data
  }
}