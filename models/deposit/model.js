export default (sequelize, Datatypes) => {
  const deposit = sequelize.define('Deposits', {
    id: {
      type: Datatypes.UUID(),
      defaultValue: Datatypes.UUIDV4(),
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
    interestType: {
      type: Datatypes.INTEGER(),
      defaultValue: 0,
      allowNull: false
    },
    terms: {
      type: Datatypes.INTEGER(),
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
      // models.Deposits.belongsTo(models.Users, { foreignKey: 'user', targetKey: 'username', onDelete: 'CASCADE' })
      models.Deposits.belongsTo(models.DepositTypes, { foreignKey: 'type', targetKey: 'id' })
      models.Deposits.hasMany(models.DepositPayments, { foreignKey: 'id', sourceKey: 'id' })
    }
  })

  return deposit
}