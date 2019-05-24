export default {
  owner: async function (parent, args, context, info) {
    let username = parent.dataValues.owner
    const data = await context.dataloaders.users.load(username)
    return data
  }
}