const router = require('express').Router()
const {Item, db} = require('../db') 

router.get('/', async (req, res, next) => {
  try {
    const items = await Item.findAll()
    if (items) {
      res.status(200).send(items)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.id)
    if (item) {
      res.status(200).send(item)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newItem = await Item.create({
      name: req.body.name,
      brand: req.body.brand,
      upc: req.body.upc,  
      rating: req.body.rating
    })

    const pricing = db.model('pricing')
    const newPrice = await pricing.create({
      itemId: newItem.id,
      storeId: 1 //MUST CHANGE THIS TO NON - PLACEHOLDER VALUE
    })

    res.status(201).send(newItem)
    //res.status(201).send(newPrice)
  } catch (error) {
   next(error)
  }
})

module.exports = router