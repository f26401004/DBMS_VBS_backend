export default (sequelize, Datatypes) => {
  const insurance = sequelize.define('Insurances', {
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
    insured: {
      type: Datatypes.STRING(),
      allowNull: false
    },
    beneficiary: {
      type: Datatypes.STRING(),
      alloeNull: false
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
      models.Insurances.belongsTo(models.Users, { foreignKey: 'user', targetKey: 'SSN', onDelete: 'CASCADE' })
      models.Insurances.belongsTo(models.InsuranceTypes, { foreignKey: 'type', targetKey: 'id' })
      models.Insurances.hasMany(models.InsurancePayments, { foreignKey: 'id', sourceKey: 'id' })
    }
  })

  return insurance
}