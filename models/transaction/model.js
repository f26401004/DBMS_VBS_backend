export default (sequelize, Datatypes) => {
  const transaction = sequelize.define('Transactions', {
    id: {
      type: Datatypes.UUID(),
      defaultValues: Datatypes.UUIDV4(),
      primaryKey: true,
      allowNull: false,
      unique: true
    },
    userCardNo: {
      type: Datatypes.STRING(16),
      allowNull: false
    },
    targetCardNo: {
      type: Datatypes.STRING(16),
      allowNull: false
    },
    type: {
      type: Datatypes.INTEGER(),
      defaultValues: 0,
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
      // models.Transactions.belongsTo(models.Users, { foreignKey: 'user', targetKey: 'username', onDelete: 'CASCADE' })
      // models.Transactions.belongsTo(models.Users, { foreignKey: 'target', targetKey: 'username', onDelete: 'CASCADE' })
      // define the type field belong to transaction types table tid field
      models.Transactions.belongsTo(models.TransactionTypes, { foreignKey: 'type', targetKey: 'id' })
      // define the cardNo belong to cards table cardNo field
      models.Transactions.belongsTo(models.Cards, { foreignKey: 'userCardNo', targetKey: 'cardNo' })
      models.Transactions.belongsTo(models.Cards, { foreignKey: 'targetCardNo', targetKey: 'cardNo' })
    }
  }, {
    indexes: [
      { fields: ['user', 'target'], unique: true }
    ]
  })

  return transaction
}