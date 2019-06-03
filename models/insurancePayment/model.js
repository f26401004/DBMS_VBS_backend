export default (sequelize, Datatypes) => {
  const insurancePayment = sequelize.define('InsurancePayments', {
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
      models.InsurancePayments.belongsTo(models.Insurances, { foreignKey: 'id', targetKey: 'id', onDelete: 'CASCADE' })
    }
  })

  return insurancePayment
}