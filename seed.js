const {db} = require('./server/db')
const { green, red } = require("chalk");

const {Item} = require('./server/db')
const {Category} = require('./server/db')
const {Store} = require('./server/db')

// const Item = require('./server/db/models/Item')
// const Store = require('./server/db/models/Store')

const items = [
  {
    name: 'Cinnamon Toast Crunch',
    brand: 'General Mills',
    upc: 123456789,
    rating: 4
  },
  {
    name: 'Coco Crispies',
    brand: 'Kellogs',
    upc: 987654321,
    rating: 3
  }
]

const categories = [
  {
    name: 'Cereal'
  },
  {
    name: 'Candy'
  },
  {
    name: "Drinks"
  }
]

const stores = [
  {
    name: 'City Fresh',
    location: 'knickerbocker'
  }, 
  {
    name: 'Mr. Kiwi',
    location: 'Myrtle & Broadway'
  }
]

const seed = async () => {
  try {
    await db.sync({force: true})

    await Promise.all(
      items.map(item => Item.create(item))
    )
    await Promise.all(
      stores.map(store => Store.create(store))
    )
    await Promise.all(
      categories.map(category => Category.create(category))
    )

    console.log(green("Seeding success!"))
    db.close()
  } catch (error) {
    console.error(red("Error :/", error))
    db.close
  }
}


seed()


