export default (sequelize, Datatypes) => {
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
    floatingInterest: {
      type: Datatypes.DOUBLE(8, 5),
      allowNull: false
    },
    fixedInterest: {
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
    associate: (models) => {
      models.DepositTypes.hasMany(models.Deposits, { foreignKey: 'type', sourceKey: 'id' })
    }
  })

  return depositType
}