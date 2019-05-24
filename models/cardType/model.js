export default (sequelize, Datatypes) => {
  const cardType = sequelize.define('CardTypes', {
    id: {
      type: Datatypes.INTEGER(),
      primaryKey: true,
      unique: true,
      allowNull: false
    },
    name: {
      type: Datatypes.STRING(),
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
      models.CardTypes.hasMany(models.Cards, { foreignKey: 'type', sourceKey: 'id' })
    }
  })

  return cardType
}