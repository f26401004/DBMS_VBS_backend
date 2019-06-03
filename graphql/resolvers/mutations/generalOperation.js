import { AuthenticationError } from 'apollo-server-express'

export default {
  assetsAuth: async (parent, args, context, info) => {
    const user = await context.dataloaders.users.load(args.username)
    const card = await context.dataloaders.cards.load(args.cardNo)
    if (!user) {
      return new AuthenticationError('One of the username/password was wrong, please try again')
    }
    const check = context.db.Users.verify(args.password, user.dataValues.password)
    if (!check) {
      return new AuthenticationError('One of the username/password was wrong, please try again')
    }
    if (user.dataValues.permission > 0) {
      return true
    }
    if (card.dataValues.owner !== args.username) {
      return new AuthenticationError('The account do not have permission')
    }
    return true
  },
  cardAssetsOperation: async (parent, args, context, info) => {
    try {
      const target = await context.dataloaders.cards.load(args.cardNo)
      await context.instance.transaction(async t => {
        await context.db.Cards.update({
          assets: target.dataValues.assets + args.value
        }, {
          where: {
            cardNo: args.cardNo
          }
        })
        await context.db.Transactions.create({
          userCard: args.value > 0 ? '0000000000000000' : args.cardNo,
          targetCard: args.value > 0 ? args.cardNo : '0000000000000000',
          value: Math.abs(args.value),
          type: 1,
          createdBy: 'root',
          updatedBy: 'root'
        })
      })
      return target
    } catch (error) {
      console.log(error)
    }
  }
}