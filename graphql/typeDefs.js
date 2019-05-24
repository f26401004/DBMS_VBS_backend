import { gql } from 'apollo-server-express'

export default gql`
scalar Date

type TransactionType {
  tid: ID!
  name: String
  createdAt: Date
  updatedAt: Date
}
type Transaction {
  tid: ID!
  user: User
  target: User
  type: TransactionType
  value: Float
  createdAt: Date
  updatedAt: Date
}
type InsuranceType {
  itid: ID!
  name: String
  interest_rate: Float
  createdAt: Date
  updatedAt: Date
}
type Insurance {
  id: ID!
  user: User
  type: InsuranceType
  terms: Int
  createdAt: Date
  updatedAt: Date
}
type User {
  username: ID!
  SSN: String
  permission: Int
  authCode: String
  assets: Float
  createdAt: Date
  updatedAt: Date
  transactions: [Transaction!]!
  insurances: [Insurance!]!
}
type CardType {
  id: ID!
  name: String
  createdAt: Date
  updatedAt: Date
}
type Card {
  cardNo: ID!
  csc: String
  type: Int
  assets: Float
  owner: String
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
  addUser(username: String!, password: String!, SSN: String!, permission: Int!): User
}
`