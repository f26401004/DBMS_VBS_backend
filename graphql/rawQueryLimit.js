export default {
  users: [ 'username', 'authCode', 'SSN', 'assets', 'permission', 'createdAt', 'updatedAt' ],
  cards: [ 'cardNo', 'csc', 'type', 'assets', 'owner', 'createdAt', 'updatedAt' ],
  cardTypes: [ 'id', 'name', 'bonusRate', 'interestRate', 'createdAt', 'updatedAt' ],
  transactions: [ 'id', 'user', 'target', 'type', 'value', 'createdAt', 'updatedAt' ],
  transactionTypes: [ 'id', 'name', 'createdAt', 'updatedAt' ],
  insurances: [ 'id', 'user', 'type', 'createdAt', 'updatedAt' ],
  insuranceTypes: [ 'id', 'name', 'value', 'interestRate', 'createdAt', 'updatedAt' ],
  insurancePayments: [ 'id', 'deadline', 'term', 'status', 'createdAt', 'updatedAt' ],
  deposits: [ 'id', 'user', 'type', 'createdAt', 'updatedAt' ],
  depositTypes: [ 'id', 'name', 'createdAt', 'updatedAt' ],
  depositPayments: [ 'id', 'deadline', 'term', 'status', 'createdAt', 'updatedAt' ],
  costs: [ 'id', 'name', 'value', 'createdAt', 'updatedAt' ]
}