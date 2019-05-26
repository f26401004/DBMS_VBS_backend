export default (sequelize, Datatypes) => {
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
      // models.Insurances.belongsTo(models.Users, { foreignKey: 'user', targetKey: 'username', onDelete: 'CASCADE' })
      models.Insurances.belongsTo(models.InsuranceTypes, { foreignKey: 'type', targetKey: 'id' })
    }
  })

  return insurance
}