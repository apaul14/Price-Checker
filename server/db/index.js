const db = require('./database')
const Category = require('./models/Category')
const Item = require('./models/Item')
const Store = require('./models/Store')

//Items.hasMany(Store)
//Items.hasMany(Category)
//Stores.hasMany(Item)


Item.belongsToMany(Store, {through: 'pricing info'})
Store.belongsToMany(Item, {through: 'pricing info'})

Item.belongsToMany(Category, {through: 'item categories'})
Category.hasMany(Item, {through: 'item categories'})





module.exports = {
  db,
  Category,
  Item,
  Store
}