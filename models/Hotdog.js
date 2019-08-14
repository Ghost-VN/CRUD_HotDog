const Sequelize = require('sequelize')
const sequelize = require('../database/db.js')

module.exports = sequelize.define(
  'HotDogs',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    HotDogName: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
)
