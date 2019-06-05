import { gql } from 'apollo-server-express'

export default gql`
scalar Date

type User {
  username: ID!
  SSN: String
  permission: Int
  authCode: String
  sex: Int
  createdAt: Date
  updatedAt: Date
  transactions: [Transaction!]!
  insurances: [Insurance!]!
}
type Card {
  cardNo: ID!
  csc: String
  type: CardType
  assets: Float
  owner: User
  createdAt: Date
  updatedAt: Date
}
type CardType {
  id: Int!
  name: String
  bonusRate: Float
  interestRate: Float
  createdAt: Date
  updatedAt: Date
}
type Transaction {
  id: ID!
  userCard: Card
  targetCard: Card
  type: TransactionType
  value: Float
  createdAt: Date
  updatedAt: Date
}
type TransactionType {
  id: Int!
  name: String
  createdAt: Date
  updatedAt: Date
}
type Insurance {
  id: ID!
  user: User
  type: InsuranceType
  insured: User
  beneficiary: User
  createdAt: Date
  updatedAt: Date
}
type InsuranceType {
  id: Int!
  name: String
  value: Int
  terms: Int
  interestRate: Float
  createdAt: Date
  updatedAt: Date
}
type InsurancePayment {
  id: ID!
  term: Int
  deadline: Date
  status: Int
  createdAt: Date
  updatedAt: Date
}
type Deposit {
  id: ID!
  user: User
  type: DepositType
  interestType: Int
  terms: Int
  amount: Int
  createdAt: Date
  updatedAt: Date
}
type DepositType {
  id: Int!
  name: String
  floatingInterest: Float
  fixedInterest: Float
  createdAt: Date
  updatedAt: Date
}
type DepositPayment {
  id: ID!
  term: Int!
  deadline: Date
  status: Int
  createdAt: Date
  updatedAt: Date
}
type Cost {
  id: Int!
  name: String
  value: Float
  createdAt: Date
  updatedAt: Date
}

input DepositPaymentInput {
  id: ID!
  term: Int!
  deadline: Date
  status: Int
  createdAt: Date
  updatedAt: Date
}
input InsurancePaymentInput {
  id: ID!
  term: Int!
  deadline: Date
  status: Int
  createdAt: Date
  updatedAt: Date
}

type Query {
  users: [User!]!
  cards: [Card!]!
  cardTypes: [CardType!]!
  transactions: [Transaction!]!
  transactionTypes: [TransactionType!]!
  insurances: [Insurance!]!
  insuranceTypes: [InsuranceType!]!
  insurancePayments: [InsurancePayment!]!
  deposits: [Deposit!]!
  depositTypes: [DepositType!]!
  depositPayments: [DepositPayment!]!
  costs: [Cost!]!
}

type Mutation {
  insertUsers(username: String, password: String, SSN: String, permission: Int, sex: Int, birthday: String!): User
  insertCards(cardNo: String, csc: String, type: Int, assets: Float, owner: String): Card
  insertCardTypes(id: Int, name: String): CardType
  insertTransactionTypes(id: Int, name: String): TransactionType
  insertInsurances(id: ID, user: String, insured: String, beneficiary: String, type: Int): Insurance
  insertInsuranceTypes(id: Int, name: String, value: Int, terms: Int, interestRate: Float): InsuranceType
  insertInsurancePayments(id: ID, deadline: String, term: Int, status: Int): InsurancePayment
  insertDeposits(id: ID, user: String, type: Int, interestType: Int, amount: Int, terms: Int): Deposit
  insertDepositTypes(id: Int, name: String, fixedInterest: Float, floatingInterest: Float): DepositType
  insertDepositPayments(id: ID, deadline: String, term: Int, status: Int): DepositPayment
  insertCosts(id: Int, name: String, value: Float): Cost

  updateUsers(key: String!, username: String, authCode: String, SSN: String, permission: Int, sex: Int): User
  updateCards(key: String!, cardNo: String, csc: String, type: Int, assets: Float, owner: String): Card
  updateCardTypes(key: Int!, id: Int, name: String): CardType
  updateTransactions(key: String!, id: String, userCard: String, targetCard: String, type: Int, value: Float): Transaction
  updateTransactionTypes(key: Int!, id: Int, name: String): TransactionType
  updateInsurances(key: String!, id: String, user: String, insured: String, beneficiary: String, type: Int): Insurance
  updateInsuranceTypes(key: Int!, id: Int, name: String, value: Int, terms: Int, interestRate: Float): InsuranceType
  updateInsurancePayments(key: String!, id: ID, deadline: String, term: Int, status: Int): InsurancePayment
  updateDeposits(key: String!, id: String, user: String, type: Int, interestType: Int, amount: Int): Deposit
  updateDepositTypes(key: Int!, id: Int, name: String, fixedInterest: Float, floatingInterest: Float): DepositType
  updateDepositPayments(key: String!, id: ID, deadline: String, term: Int, status: Int): DepositPayment
  updateCosts(key: Int!, id: Int, name: String, value: Float): Cost

  deleteUsers(keys: [String!]!): [User!]!
  deleteCards(keys: [Int!]!): [Card!]!
  deleteCardTypes(keys: [Int!]!): [CardType!]!
  deleteTransactions(keys: [String!]!): [Transaction!]!
  deleteTransactionTypes(keys: [Int!]!): [TransactionType!]!
  deleteInsurances(keys: [String!]!): [Insurance!]!
  deleteInsuranceTypes(keys: [Int!]!): [InsuranceType!]!
  deleteInsurancePayments(keys: [String!]!): [InsurancePayment!]!
  deleteDeposits(keys: [String!]!): [Deposit!]!
  deleteDepositTypes(keys: [Int!]!): [DepositType!]!
  deleteDepositPayments(keys: [String!]!): [DepositPayment!]!
  deleteCosts(keys: [Int!]!): [Cost!]!

  ownerAuth(cardNo: String!, SSN: String!): Boolean
  cardAuth(cardNo: String!, username: String!, password: String!): Boolean
  cardAssetsOperation(cardNo: String!, value: Int!): Card
  initInsurancePayments(id: String!, terms: Int!): [InsurancePayment!]!
  initSavingInsurancePayments(id: String!, terms: Int!): [DepositPayment!]!
  updateDepositPaymentStatus(id: String!, term: Int!, status: Int!): DepositPayment
  updateInsurancePaymentStatus(id: String!, term: Int!, status: Int!): InsurancePayment
}
`