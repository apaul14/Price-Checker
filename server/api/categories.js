const router = require('express').Router()
const {Category} = require('../db') 

router.get('/', async (req, res, next) => {
  try {
    const categories = await Category.findAll()
    if (categories) {
      res.status(200).send(categories)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const category = await Category.findByPk(req.params.id)
    if (category) {
      res.status(200).send(category)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newCategory = await Category.create({
      name: req.body.name,
    })
    res.status(201).send(newCategory)
  } catch (error) {
   next(error)
  }
})

module.exports = router