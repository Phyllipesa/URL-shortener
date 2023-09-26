const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database')

class Link extends Model {}

Link.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  hits: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0
  },
}, {
  sequelize,
  modelName: 'link',
  timestamps: false
})

module.exports = Link;