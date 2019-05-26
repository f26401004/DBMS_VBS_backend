import express from 'express'

import { ApolloServer } from 'apollo-server-express'
import dataLoaders from './graphql/dataLoader.js'
import typeDefs from './graphql/typeDefs.js'
import resolvers from './graphql/resolvers'
import rawQueryLimit from './graphql/rawQueryLimit.js'
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
    const permission = req.body.permission
    const tableName = req.body.tableName
    // detect the type of raw query
    let type;
    if (sentence.toLowerCase().indexOf('select') > -1) {
      type = models.instance.QueryTypes.SELECT
    } else if (sentence.toLowerCase().indexOf('update') > -1) {
      type = models.instance.QueryTypes.UPDATE
    } else {
      res.status(500).send('You can only perform select/update operations by raw query!!')
      return
    }
    const result = await models.instance.query(sentence, {
      type: type
    })
    // filter out the columns with different permission
    if (permission != 2 && tableName) {
      result = result.map(target => {
        const temp = {}
        rawQueryLimit[tableName].forEach(key => {
          temp[key] = target[key]
        })
        return temp
      })
    }

    res.status(200).json(result)
  } catch (error) {
    console.log(error)
    res.status(500).send(error.message)
  }
})

// listen port 3000
app.listen(3000, () => {
  console.log('Now server is listening on port 3000')
})