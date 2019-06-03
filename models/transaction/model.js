export default (sequelize, Datatypes) => {
  const transaction = sequelize.define('Transactions', {
    id: {
      type: Datatypes.UUID(),
      defaultValue: Datatypes.UUIDV4(),
      primaryKey: true,
      allowNull: false,
      unique: true
    },
    userCard: {
      type: Datatypes.STRING(16),
      allowNull: false
    },
    targetCard: {
      type: Datatypes.STRING(16),
      defaultValue: null,
      allowNull: true
    },
    type: {
      type: Datatypes.INTEGER(),
      defaultValue: 0,
      allowNull: false
    },
    value: {
      type: Datatypes.DOUBLE(),
      defaultValue: 0,
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
      // models.Transactions.belongsTo(models.Users, { foreignKey: 'user', targetKey: 'username', onDelete: 'CASCADE' })
      // models.Transactions.belongsTo(models.Users, { foreignKey: 'target', targetKey: 'username', onDelete: 'CASCADE' })
      // define the type field belong to transaction types table tid field
      models.Transactions.belongsTo(models.TransactionTypes, { foreignKey: 'type', targetKey: 'id' })
      // define the cardNo belong to cards table cardNo field
      models.Transactions.belongsTo(models.Cards, { foreignKey: 'userCard', targetKey: 'cardNo' })
      models.Transactions.belongsTo(models.Cards, { foreignKey: 'targetCard', targetKey: 'cardNo' })
    }
  }, {
    indexes: [
      { fields: ['user', 'target'], unique: true }
    ]
  })

  return transaction
}