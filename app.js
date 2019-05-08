const express = require('express')
const fs = require('fs')
const path = require('path')

const { ApolloServer } = require('apollo-server-express')
const dataLoaders = require('./graphql/dataLoader.js')
const typeDefs = require('./graphql/typeDefs.js')
const resolvers = require('./graphql/resolvers.js')
const models = require('./models')

const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

// register apollo server as middleware
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: async function ({ req }) {
    return {
      db: models.db,
      dataloaders: dataLoaders
    }
  },
  tracing: true
})
apolloServer.applyMiddleware({ app })
// register body parser and cors middleware
app.use(bodyParser.json() , cors())
app.use(express.static('statics'))

// listen port 3000
app.listen(3000, function () {
  console.log('Now server is listening on port 3000')
})