module.exports = (sequelize, Datatypes) => {
  const insuranceType = sequelize.define('InsuranceTypes', {
    itid: {
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
    interest_rate: {
      type: Datatypes.DOUBLE(8, 4),
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
      // define the itid field has many in insurance table
      models.InsuranceTypes.hasMany(models.Insurances, { foreignKey: 'type', sourceKey: 'itid' })
    }
  })

  return insuranceType
}