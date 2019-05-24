import queries from './queries'
import mutations from './mutations'

import transaction from './types/transaction'
import insurance from './types/insurance'
import user from './types/user'
import card from './types/card'
import deposit from './types/deposit'

export default {
  Transaction: transaction,
  Insurance: insurance,
  User: user,
  Card: card,
  Deposit: deposit,
  Query: queries,
  Mutation: mutations
}