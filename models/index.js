const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('./config.json')

// initialize sequelize
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  pool: {
    max: 10,
    min: 0,
    acquire: 3000,
    idle: 10000
  },
  define: {
    freezeTableName: true
  }
})
// test database connection
sequelize.authenticate()
  .then(() => {
    console.log('Sequelize connects to database success!!')
  })
  .catch(() => {
    console.log('Sequelize connects to database failed!!')
  })

// sync the database
sequelize.sync({ force: false }).then (() => {
  console.log('Force sync the database success!!')
}).catch (error => {
  console.log(error)
  console.log('Force sync the database failed!!')
})

const db = {}

// import all database models
fs.readdirSync(__dirname)
  .filter(target => {
    return target.indexOf('.') !== 0 && target !== 'index.js' && target !== 'config.json' && target !== 'errorHandler.js'
  })
  .forEach(target => {
    const model = sequelize.import(path.join(__dirname, `${target}/model.js`))
    db[model.name] = model
  })

// config all relationship
for (let key in db) {
  if (db[key].options.hasOwnProperty('associate')) {
    db[key].options.associate(db)
  }
}

module.exports = {
  Sequelize: Sequelize,
  instance: sequelize,
  db: db
}