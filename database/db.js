const Sequelize = require('sequelize')
const sequelize = new Sequelize('crud_HotDog', 'root', '2711', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false
})

module.exports = sequelize
