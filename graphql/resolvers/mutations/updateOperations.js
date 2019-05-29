export default {
  updateUsers: async (parent, args, context, info) => {
    try {
      const target = await context.db.Users.findOne({
        where: {
          username: args.key
        }
      })
      await context.instance.transaction(t => {
        // update the data
        return context.db.Users.update({
          username: args.username ? args.username : target.username,
          authCode: args.authCode ? args.authCode : target.authCode,
          SSN: args.SSN ? args.SSN : target.SSN,
          permission: args.permission ? args.permission : target.permission
        }, {
          where: {
            username: args.key
          }
        })
      })
      return target
    } catch (error) {
      console.log(error)
    }
  },
}