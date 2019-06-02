export default (sequelize, Datatypes) => {
  const depositPayment = sequelize.define('DepositPayments', {
    id: {
      type: Datatypes.UUID(),
      primaryKey: true,
      allowNull:  false
    },
    term: {
      type: Datatypes.INTEGER(),
      primaryKey: true,
      allowNull: false
    },
    deadline: {
      type: Datatypes.DATE(),
      allowNull: false
    },
    status: {
      type: Datatypes.INTEGER(),
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
      models.DepositPayments.belongsTo(models.Deposits, { foreignKey: 'id', targetKey: 'id', onDelete: 'CASCADE' })
    }
  })

  return depositPayment
}