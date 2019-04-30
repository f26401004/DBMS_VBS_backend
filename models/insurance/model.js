const errorHandler = require('../errorHandler')

module.exports = (sequelize, Datatypes) => {
  const insurance = sequelize.define('Insurances', {
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
    terms: {
      type: Datatypes.INTEGER(),
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
      models.Insurances.belongsTo(models.Users, { foreignKey: 'user', targetKey: 'username' })
      models.Insurances.belongsTo(models.InsuranceTypes, { foreignKey: 'type', targetKey: 'itid' })
    }
  })

  return insurance
}