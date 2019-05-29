export default {
  owner: async (parent, args, context, info) => {
    const username = parent.dataValues.owner
    const data = await context.dataloaders.users.load(username)
    return data
  },
  type: async (parent, args, context, info) => {
    const id = parent.dataValues.type 
    const data = await context.dataloaders.cardTypes.load(id)
    return data
  }
}