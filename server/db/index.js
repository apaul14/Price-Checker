const db = require('./database')
const Categories = require('./models/Categories')
const Items = require('./models/Categories')
const Stores = require('./models/Stores')

//Items.hasMany(Stores)
//Items.hasMany(Categories)
//Stores.hasMany(Items)

Items.belongsToMany(Stores, {through: 'Pricing Info'})
Stores.belongsToMany(Items, {through: 'Pricing Info'})

Items.belongsToMany(Categories, {through: 'Item Categories'})
Categories.hasMany(Items, {through: 'Item Categories'})





module.exports = {
  db,
  Categories,
  Items,
  Stores
}