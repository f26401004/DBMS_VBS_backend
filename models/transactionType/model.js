module.exports = (sequelize, Datatypes) => {
  const transactionType = sequelize.define('TransactionTypes', {
    tid: {
      type: Datatypes.INTEGER(),
      primaryKey: true,
      allowNull: false,
      unique: true,
      autoIncrement: true
    },
    name: {
      type: Datatypes.STRING(),
      allowNull: false
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
      // define the tid field has many in transaction table
      models.TransactionTypes.hasMany(models.Transactions, { foreignKey: 'type', sourceKey: 'tid' })
    }
  })

  return transactionType
}