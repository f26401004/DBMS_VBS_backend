const { gql } = require('apollo-server-express')
module.exports = gql`
type User {
  username: ID!
  permission: Int
  authCode: String
  assets: Float
}
type TransactionType {
  tid: ID!
  name: String
}
type Transaction {
  tid: ID!
  user: String
  target: String
  type: TransactionType
  value: Float
}
type InsuranceType {
  itid: ID!
  name: String
  interest_rate: Float
}
type Insurance {
  id: ID!
  user: String
  type: InsuranceType
  terms: Int
}
type Query {
  hello: String
  users: [User!]!
  transactions: [Transaction!]!
  insurances: [Insurance!]!
}
`