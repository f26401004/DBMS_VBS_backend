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
      instance: models.instance,
      dataloaders: new dataLoaders()
    }
  },
  tracing: true
})
apolloServer.applyMiddleware({ app, path: '/graphql' })
// register body parser and cors middleware
app.use(bodyParser.json() , cors())
app.use(express.static('statics'))

/**
 * search attribute operation API
 * @param String { attribute } The attribute to be searched
 * @param String { keyword } The attribute of keyword
 * @param String { tableName } The table name in database schema
 */
app.post('/search', async (req, res) => {
  try {
    const attribute = req.body.attribute
    const keyword = req.body.keyword
    const tableName = req.body.tableName
    // execute select operation
    let result = await models.instance.query(`SELECT * FROM ${tableName} WHERE ${attribute}='${keyword}'`, {
      type: models.instance.QueryTypes.SELECT
    })
    // filter out the columns no matter what permission is
    result = result.map(target => {
      const temp = {}
      rawQueryLimit[tableName.toLowerCase()].forEach(key => {
        temp[key] = target[key]
      })
      return temp
    })
    res.status(200).json(result)
  } catch (error) {
    console.log(error)
    res.status(500).send(error.message)
  }
})
/**
 * raw sql operation API
 * @param String { sentence } The sql sentence to be executed
 * @param Int { permission } The permission of requester
 * @param String { tableName } The table name in database schema
 */
app.post('/raw-sql', async (req, res) => {
  try {
    const sentence = req.body.sentence
    const permission = req.body.permission
    let tableName = req.body.tableName ? req.body.tableName.charAt(0).toLowerCase() + req.body.tableName.substr(1) : ''
    // detect the type of raw query
    let type;
    if (sentence.toLowerCase().indexOf('select') > -1) {
      type = models.instance.QueryTypes.SELECT
    } else if (sentence.toLowerCase().indexOf('update') > -1) {
      type = models.instance.QueryTypes.UPDATE
    } else if (sentence.toLowerCase().indexOf('insert') > -1) {
      type = models.instance.QueryTypes.INSERT
    } else if (sentence.toLowerCase().indexOf('delete') > -1) {
      type = models.instance.QueryTypes.DELETE
    } else {
      res.status(500).send('You can only perform select/update operations by raw query!!')
      return
    }
    let result = await models.instance.query(sentence, {
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