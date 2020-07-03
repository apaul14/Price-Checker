const router = require('express').Router()

router.get('/help', (req, res, next) => {
  res.send('Hello World!')
})

router.use('/items', require('./items'))
// router.use('/stores', require('./stores'))
// router.use('/categories', require('./categories'))

router.use((req, res, next) => {
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
});

module.exports = router