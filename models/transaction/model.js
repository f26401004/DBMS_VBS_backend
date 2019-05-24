export default (sequelize, Datatypes) => {
  const transaction = sequelize.define('Transactions', {
    id: {
      type: Datatypes.UUID(),
      defaultValues: Datatypes.UUIDV4(),
      primaryKey: true,
      allowNull: false,
      unique: true
    },
    user: {
      type: Datatypes.STRING(),
      allowNull: false
    },
    target: {
      type: Datatypes.STRING(),
      allowNull: false
    },
    type: {
      type: Datatypes.INTEGER(),
      defaultValues: 0,
      allowNull: false
    },
    cardNo: {
      type: Datatypes.STRING(16),
      allowNull: false
    },
    value: {
      type: Datatypes.DOUBLE(),
      defaultValues: 0,
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
    associate: (models) => {
      // define the user/target field belong to user table username filed
      models.Transactions.belongsTo(models.Users, { foreignKey: 'user', targetKey: 'username' })
      models.Transactions.belongsTo(models.Users, { foreignKey: 'target', targetKey: 'username'})
      // define the type field belong to transaction types table tid field
      models.Transactions.belongsTo(models.TransactionTypes, { foreignKey: 'type', targetKey: 'id' })
      // define the cardNo belong to cards table cardNo field
      models.Transactions.belongsTo(models.Cards, { foreignKey: 'cardNo', targetKey: 'cardNo' })
    }
  }, {
    indexes: [
      { fields: ['user', 'target'], unique: true }
    ]
  })

  return transaction
}