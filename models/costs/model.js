export default (sequelize, Datatypes) => {
  const costs = sequelize.define('Costs', {
    id: {
      type: Datatypes.INTEGER(),
      primaryKey: true,
      allowNull: false,
      unique: true
    },
    name: {
      type: Datatypes.STRING(),
      allowNull: false
    },
    value: {
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
    }
  })

  return costs
}