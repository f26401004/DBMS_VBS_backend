import express from 'express'

import { ApolloServer } from 'apollo-server-express'
import dataLoaders from './graphql/dataLoader.js'
import typeDefs from './graphql/typeDefs.js'
import resolvers from './graphql/resolvers'
import models from './models/index.js'

import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()

// register apollo server as middleware
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    return {
      db: models.db,
      dataloaders: dataLoaders
    }
  },
  tracing: true
})
apolloServer.applyMiddleware({ app, path: '/graphql' })
// register body parser and cors middleware
app.use(bodyParser.json() , cors())
app.use(express.static('statics'))

/**
 * raw sql operation API
 * @param String { sentence } The sql sentence to be executed
 */
app.post('/raw-sql', async (req, res) => {
  try {
    const sentence = req.body.sentence
    const result = await models.instance.query(sentence)
    res.status(200).json(result)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
})

// listen port 3000
app.listen(3000, () => {
  console.log('Now server is listening on port 3000')
})