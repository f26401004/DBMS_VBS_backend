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
  owner: String
  createdAt: Date
  updatedAt: Date
}
type CardType {
  id: ID!
  name: String
  createdAt: Date
  updatedAt: Date
}
type Transaction {
  id: ID!
  user: User
  target: User
  type: TransactionType
  value: Float
  createdAt: Date
  updatedAt: Date
}
type TransactionType {
  id: ID!
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
  id: ID!
  name: String
  interest_rate: Float
  createdAt: Date
  updatedAt: Date
}
type Deposit {
  id: ID!
  user: String
  type: Int
  term: Int
  createdAt: Date
  updatedAt: Date
}
type DepositType {
  id: ID!
  name: String
  floating_interest: Float
  fixed_interest: Float
  createdAt: Date
  updatedAt: Date
}
type InterestRate {
  id: ID!
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
  deleteUsers(keys: [String!]!): [User!]!
  deleteCards(keys: [Int!]!): [Card!]!
  deleteCardTypes(keys: [Int!]!): [CardType!]!
  deleteTransactions(keys: [Int!]!): [Transaction!]!
  deleteTransactionTypes(keys: [Int!]!): [TransactionType!]!
  deleteInsurances(keys: [Int!]!): [Insurance!]!
  deleteInsuranceTypes(keys: [Int!]!): [InsuranceType!]!
  deleteDeposits(keys: [Int!]!): [Deposit!]!
  deleteDepositTypes(keys: [Int!]!): [DepositType!]!
  deleteInterestRates(keys: [Int!]!): [InterestRate!]!
}
`