export default (sequelize, Datatypes) => {
  const deposit = sequelize.define('Deposits', {
    id: {
      type: Datatypes.UUID(),
      defaultValues: Datatypes.UUIDV4(),
      primaryKey: true,
      allowNull:  false,
      unique: true
    },
    user: {
      type: Datatypes.STRING(),
      allowNull: false
    },
    type: {
      type: Datatypes.INTEGER(),
      allowNull: false
    },
    term: {
      type: Datatypes.INTEGER(),
      allowNull: false
    },
    paid: {
      type: Datatypes.BOOLEAN(),
      allowNull: false,
      defaultValues: false
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
      models.Deposits.belongsTo(models.Users, { foreignKey: 'user', targetKey: 'username' })
      models.Deposits.belongsTo(models.DepositTypes, { foreignKey: 'type', targetKey: 'id' })
    }
  })

  return deposit
}