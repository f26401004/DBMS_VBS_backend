const DataLoader = require('dataloader')
const models = require('../models')

module.exports = {
  users: new DataLoader(async function (usernames) {
    const users = await models.db.Users.findAll({
      where: {
        username: usernames
      }
    })
    return users.sort((a, b) => usernames.indexOf(a.username) - usernames.indexOf(b.username))
  }),
  transactions: new DataLoader(async function (tids) {
    const transactions = await models.db.Transactions.findAll({
      where: {
        tid: tids
      }
    })
    return transactions.sort((a, b) => tids.indexOf(a.tid) - tids.indexOf(b.tid))
  }),
  insurances: new DataLoader(async function (itids) {
    const insurances = await models.db.Insurances.findAll({
      where: {
        itid: itids
      }
    })
    return insurances.sort((a, b) => itids.indexOf(a.itid) - itids.indexOf(b.itid))
  })
}