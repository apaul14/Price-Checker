const Sequelize = require('sequelize')
const db = require('../database')

const Store = db.define('stores', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
   }
  }
})

module.exports = {
  Store
}