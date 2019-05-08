const { gql } = require('apollo-server-express')
module.exports = gql`
scalar Date

type TransactionType {
  tid: ID!
  name: String
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
  permission: Int
  authCode: String
  assets: Float
  transactions: [Transaction!]!
  insurances: [Insurance!]!
}
type Users {
  count(username: String): Int
  rows(username: String): [User!]!
}
type Query {
  users(username: String): Users,
  user(username: String!): User
  transactions: [Transaction!]!
  insurances: [Insurance!]!
}
`