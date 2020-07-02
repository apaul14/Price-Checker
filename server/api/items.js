const router = require('express').Router()
const Item = require('../db')

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
    const item = await Item.findByPK(req.params.id)
    if (item) {
      res.status(200).send(item)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})