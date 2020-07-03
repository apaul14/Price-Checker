const Sequelize = require('sequelize')
const db = require('../database')

const Category = db.define("categories", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})


module.exports = Category