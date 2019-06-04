import bcrypt from 'bcrypt'
import errorHandler from '../../utils/errorHandler.js'

export default (sequelize, Datatypes) => {
  const user = sequelize.define('Users', {
    SSN: {
      type: Datatypes.CHAR(10),
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    username: {
      type: Datatypes.STRING(),
      allowNull: false
    },
    password: {
      type: Datatypes.CHAR(60),
      allowNull: false,
      defaultValue: bcrypt.hashSync('0000', 12),
      unique: true
    },
    sex: {
      type: Datatypes.INTEGER(),
      allowNull: false,
      defaultValue: 0
    },
    authCode: {
      type: Datatypes.CHAR(20),
      allowNull: false,
      unique: true
    },
    birthday: {
      type: Datatypes.DATEONLY(),
      allowNull: false
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
    associate: (models) => {
      // models.Users.hasMany(models.Transactions, { foreignKey: 'user', sourceKey: 'username', onDelete: 'CASCADE' })
      // models.Users.hasMany(models.Transactions, { foreignKey: 'target', sourceKey: 'username', onDelete: 'CASCADE' })
      // models.Users.hasMany(models.Insurances, { foreignKey: 'user', sourceKey: 'username', onDelete: 'CASCADE' })
      // models.Users.hasMany(models.Cards, { foreignKey: 'owner', sourceKey: 'username', onDelete: 'CASCADE' })
      // models.Users.hasMany(models.Deposits, { foreignKey: 'user', sourceKey: 'username', onDelete: 'CASCADE' })
    }
  })

  user.hash = async (target) => {
    try {
      const result = await bcrypt.hash(target, 12)
      return result
    } catch (error) {
      console.log(error)
      throw new errorHandler ('Server Internal Error', 500, 'The bcrypt hash function failed!!')
    }
  }

  user.verify = async (target, hashed) => {
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