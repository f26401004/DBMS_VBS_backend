import DataLoader from 'dataloader'
import models from '../models'

export default {
  users: new DataLoader(async function (usernames) {
    const users = await models.db.Users.findAll({
      where: {
        username: usernames
      }
    })
    return users.sort((a, b) => usernames.indexOf(a.username) - usernames.indexOf(b.username))
  }),
  transactionTypes: new DataLoader(async function (ids) {
    const transactionTypes = await models.db.TransactionTypes.findAll({
      where: {
        id: ids
      }
    })
    return transactionTypes.sort((a, b) => ids.indexOf(a.id) - ids.indexOf(b.id))
  }),
  insuranceTypes: new DataLoader(async function (ids) {
    const insuranceTypes = await models.db.InsuranceTypes.findAll({
      where: {
        id: ids
      }
    })
    return insuranceTypes.sort((a, b) => ids.indexOf(a.id) - ids.indexOf(b.id))
  }),
  depositTypes: new DataLoader(async function (ids) {
    const depositTypes = await models.db.DepositTypes.findAll({
      where: {
        id: ids
      }
    })
    return depositTypes.sort((a, b) => ids.indexOf(a.id) - ids.indexOf(b.id))
  })
}