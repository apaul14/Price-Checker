const db = require('./database')
//const Category = require('./models/Category')
const Item = require('./models/Item')
const Store = require('./models/Store')

//Items.hasMany(Store)
//Items.hasMany(Category)
//Stores.hasMany(Item)


Item.belongsToMany(Store, {through: 'pricing info'})
Store.belongsToMany(Item, {through: 'pricing info'})

//Items.belongsToMany(Category, {through: 'Item Categories'})
//Category.hasMany(Item, {through: 'Item Categories'})





module.exports = {
  db,
  //Categories,
  Item,
  Store
}