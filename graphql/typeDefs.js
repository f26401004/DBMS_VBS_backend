import { gql } from 'apollo-server-express'

export default gql`
scalar Date

type User {
  username: ID!
  SSN: String
  permission: Int
  authCode: String
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
  term: Int
  paid: Int
  createdAt: Date
  updatedAt: Date
}
type InsuranceType {
  id: Int!
  name: String
  interest_rate: Float
  createdAt: Date
  updatedAt: Date
}
type Deposit {
  id: ID!
  user: User
  type: DepositType
  paid: Int
  term: Int
  createdAt: Date
  updatedAt: Date
}
type DepositType {
  id: Int!
  name: String
  floating_interest: Float
  fixed_interest: Float
  createdAt: Date
  updatedAt: Date
}
type InterestRate {
  id: Int!
  name: String
  value: Float
  createdAt: Date
  updatedAt: Date
}

type Query {
  users: [User!]!
  cardTypes: [CardType!]!
  cards: [Card!]!
  deposits: [Deposit!]!
  depositTypes: [DepositType!]!
  transactionTypes: [TransactionType!]!
  transactions: [Transaction!]!
  insuranceTypes: [InsuranceType!]!
  insurances: [Insurance!]!
  interestRates: [InterestRate!]!
}

type Mutation {
  updateUsers(key: String!, username: String, authCode: String, SSN: String, permission: Int): User
  updateCards(key: String!, cardNo: String, csc: String, type: Int, assets: Float, owner: String): Card
  updateCardTypes(key: Int!, id: Int, name: String): CardType
  updateTransactions(key: String!, id: String, userCard: String, targetCard: String, type: Int, value: Float): Transaction
  updateTransactionTypes(key: Int!, id: Int, name: String): TransactionType
  updateInsurances(key: String!, id: String, user: String, type: Int, term: Int, paid: Int): Insurance
  updateInsuranceTypes(key: Int!, id: Int, name: String): InsuranceType
  updateDeposits(key: String!, id: String, user: String, type: Int, term: Int, paid: Int): Deposit
  updateDepositTypes(key: Int!, id: Int, name: String): DepositType
  updateInterestRates(key: Int!, id: Int, name: String, value: Float): InterestRate

  deleteUsers(keys: [String!]!): [User!]!
  deleteCards(keys: [Int!]!): [Card!]!
  deleteCardTypes(keys: [Int!]!): [CardType!]!
  deleteTransactions(keys: [String!]!): [Transaction!]!
  deleteTransactionTypes(keys: [Int!]!): [TransactionType!]!
  deleteInsurances(keys: [String!]!): [Insurance!]!
  deleteInsuranceTypes(keys: [Int!]!): [InsuranceType!]!
  deleteDeposits(keys: [String!]!): [Deposit!]!
  deleteDepositTypes(keys: [Int!]!): [DepositType!]!
  deleteInterestRates(keys: [Int!]!): [InterestRate!]!
}
`