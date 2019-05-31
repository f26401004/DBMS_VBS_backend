export default {
  users: [ 'username', 'authCode', 'SSN', 'assets', 'permission', 'createdAt', 'updatedAt' ],
  cards: [ 'cardNo', 'csc', 'type', 'assets', 'owner', 'createdAt', 'updatedAt' ],
  cardTypes: [ 'id', 'name', 'bonusRate', 'interestRate', 'createdAt', 'updatedAt' ],
  transactions: [ 'id', 'user', 'target', 'type', 'value', 'createdAt', 'updatedAt' ],
  transactionTypes: [ 'id', 'name', 'createdAt', 'updatedAt' ],
  insurances: [ 'id', 'user', 'type', 'term', 'paid', 'createdAt', 'updatedAt' ],
  insuranceTypes: [ 'id', 'name', 'createdAt', 'updatedAt' ],
  deposits: [ 'id', 'user', 'type', 'term', 'paid', 'createdAt', 'updatedAt' ],
  depositTypes: [ 'id', 'name', 'createdAt', 'updatedAt' ],
  costs: [ 'id', 'name', 'value', 'createdAt', 'updatedAt' ]
}