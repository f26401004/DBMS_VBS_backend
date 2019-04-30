const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const typeDefs = require('./graphql/typeDefs.js')
const resolvers = require('./graphql/resolvers.js')
const models = require('./models')
const app = express()

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: models
})

apolloServer.applyMiddleware({ app })

app.listen(3000, function () {
  console.log('Now server is listening on port 3000')
})