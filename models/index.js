import fs from 'fs'
import path from 'path'
import Sequelize from 'sequelize'
import config from './config.json'
import insertData from '../utils/insertData'

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

const db = {}

// import all database models
fs.readdirSync(__dirname)
  .filter(target => {
    return target.indexOf('.') !== 0 && target !== 'index.js' && target !== 'config.json'
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

// sync the database
sequelize.sync({ force: config.forceSync }).then (async () => {
  if (config.forceSync) {
    console.log('Force sync the database success!!')
    await db.Users.bulkCreate(insertData.users)
    console.log('default user table complete initialization')
    await db.InterestRates.bulkCreate(insertData.interestRates)
    console.log('default interest rate table complete initialization')
    await db.TransactionTypes.bulkCreate(insertData.transacionTypes)
    console.log('default transaction type table complete initialization')
    await db.InsuranceTypes.bulkCreate(insertData.insuranceTypes)
    console.log('default insurance type table complete initialization')
    await db.DepositTypes.bulkCreate(insertData.depositTypes)
    console.log('default deposit type table complete initialization')
    await db.CardTypes.bulkCreate(insertData.cardTypes)
    console.log('default card type table complete initialization')
  } else {
    console.log('Sync the database success!!')
  }
    
}).catch (error => {
  console.log(error)
  console.log('Force sync the database failed!!')
})

export default {
  Sequelize: Sequelize,
  instance: sequelize,
  db: db
}