const Sequelize = require("sequelize")
const db = require("../database")

const Item = db.define("items",{
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  brand : {
    type: Sequelize.STRING,
    defaultValue: "Generic/No Brand"
  },
  upc: {
    type: Sequelize.Integer
  },
  rating: {
    type: Sequelize.INTEGER,
    min: 0, 
    max: 5
  }
})

module.exports = {
  Item
}