module.exports = (sequelize, Datatypes) => {
  const depositType = sequelize.define('DepositTypes', {
    id: {
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
    floating_interest: {
      type: Datatypes.DOUBLE(8, 5),
      allowNull: false
    },
    fixed_interest: {
      type: Datatypes.DOUBLE(8, 5),
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
      models.DepositTypes.hasMany(models.Deposits, { foreignKey: 'type', sourceKey: 'id' })
    }
  })

  return depositType
}