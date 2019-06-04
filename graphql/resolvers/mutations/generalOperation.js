import { AuthenticationError, ForbiddenError } from 'apollo-server-express'

export default {
  ownerAuth: async (parent, args, context, info) => {
    const card = await context.db.Cards.findOne({
      where: {
        cardNo: args.cardNo
      }
    })
    if (card.owner !== args.SSN) {
      return new AuthenticationError('The user do not own this card!')
    }
    return true
  },
  cardAuth: async (parent, args, context, info) => {
    const user = await context.db.Users.findOne({
      where: {
        username: args.username
      }
    })
    const card = await context.db.Cards.findOne({
      where: {
        cardNo: args.cardNo
      }
    })
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
    console.log('test')
    try {
      const target = await context.db.Cards.findOne({
        where: {
          cardNo: args.cardNo
        }
      })
      if (target.dataValues.assets + args.value < 0) {
        return new ForbiddenError(`The card assets (${target.dataValues.assets}) is not enough to support the operation`)
      }
      await context.instance.transaction(async t => {
        return Promise.all([
          context.db.Cards.update({
            assets: target.dataValues.assets + args.value
          }, {
            where: {
              cardNo: args.cardNo
            }
          }),
          context.db.Transactions.create({
            userCard: args.value > 0 ? '0000000000000000' : args.cardNo,
            targetCard: args.value > 0 ? args.cardNo : '0000000000000000',
            value: Math.abs(args.value),
            type: 1,
            createdBy: 'root',
            updatedBy: 'root'
          })
        ])
      })
      return target
    } catch (error) {
      console.log(error)
    }
  },
  initInsurancePayments: async (parent, args, context, info) => {
    try {
      const temp = []
      const currentDate = new Date()
      currentDate.setMonth(currentDate.getMonth() + 1)
      currentDate.setDate(1)
      for (let i = 0 ; i < args.terms ; ++i) {
        temp.push({
          id: args.id,
          term: i + 1,
          deadline: currentDate.toISOString(),
          status: 0,
          createdBy: 'root',
          updatedBy: 'root'
        })
        currentDate.setMonth(currentDate.getMonth() + 1)
      }
      const result = await context.instance.transaction(t => {
        return context.db.InsurancePayments.bulkCreate(temp, {
          returning: true
        })
      })
      return result
    } catch (error) {
      console.log(error)
    }
  },
  initSavingInsurancePayments: async (parent, args, context, info) => {
    try {
      const temp = []
      const currentDate = new Date()
      currentDate.setMonth(currentDate.getMonth() + 1)
      currentDate.setDate(1)
      for (let i = 0 ; i < args.terms ; ++i) {
        temp.push({
          id: args.id,
          term: i + 1,
          deadline: currentDate.toISOString(),
          status: 0,
          createdBy: 'root',
          updatedBy: 'root'
        })
        currentDate.setMonth(currentDate.getMonth() + 1)
      }
      const result = await context.instance.transaction(t => {
        return context.db.DepositPayments.bulkCreate(temp, {
          returning: true
        })
      })
      return result
    } catch (error) {
      console.log(error)
    }
  }
}