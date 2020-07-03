const router = require('express').Router()
const {Store} = require('../db') 

router.get('/', async (req, res, next) => {
  try {
    const stores = await Store.findAll()
    if (stores) {
      res.status(200).send(stores)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const store = await Store.findByPk(req.params.id)
    if (store) {
      res.status(200).send(store)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newStore = await Store.create({
      name: req.body.name,
      location: req.body.location
    })
    res.status(201).send(newStore)
  } catch (error) {
   next(error)
  }
})

module.exports = router