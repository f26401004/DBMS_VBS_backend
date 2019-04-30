const bcrypt = require('bcryptjs')
const errorHandler = require('../errorHandler')

module.exports = (sequelize, Datatypes) => {
  const user = sequelize.define('Users', {
    username: {
      type: Datatypes.STRING(),
      primaryKey: true,
      allowNull: false,
      unique: true
    },
    password: {
      type: Datatypes.STRING(),
      allowNull: false,
      unique: true
    },
    authCode: {
      type: Datatypes.STRING(),
      allowNull: false,
      unique: true
    },
    assets: {
      type: Datatypes.DOUBLE(),
      allowNull: false,
      defaultValue: 0
    },
    permission: {
      type: Datatypes.INTEGER(),
      allowNull: false,
      defaultValue: 0
    },
    createdBy: {
      type: Datatypes.STRING(),
      allowNull: false
    },
    updatedBy: {
      type: Datatypes.STRING(),
      allowNull: false
    }
  }, {
    associate: function (models) {
      models.Users.hasMany(models.Transactions, { foreignKey: 'user', sourceKey: 'username' })
      models.Users.hasMany(models.Transactions, { foreignKey: 'target', sourceKey: 'username' })
      models.Users.hasMany(models.Insurances, { foreignKey: 'user', sourceKey: 'username' })
    }
  })

  user.hash = async function (target) {
    try {
      const result = await bcrypt.hash(target, 20)
      return result
    } catch (error) {
      console.log(error)
      throw new errorHandler ('Server Internal Error', 500, 'The bcrypt hash function failed!!')
    }
  }

  user.verify = async function (target, hashed) {
    try {
      const result = await bcrypt.compare(target, hashed)
      return result
    } catch (error) {
      console.log(error)
      throw new errorHandler ('Unauthorized Error', 401, 'The bcrypt compare function failed!!')
    }
  }

  return user
}