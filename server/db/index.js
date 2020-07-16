const db = require('./database')
const Category = require('./models/Category')
const Item = require('./models/Item')
const Store = require('./models/Store')

//Items.hasMany(Store)
//Items.hasMany(Category)
//Stores.hasMany(Item)


Item.belongsToMany(Store, {through: 'pricing'})

Store.belongsToMany(Item, {through: 'pricing'})

Item.belongsToMany(Category, {through: 'item categories'})
Category.belongsToMany(Item, {through: 'item categories'})





module.exports = {
  db,
  Category,
  Item,
  Store
}