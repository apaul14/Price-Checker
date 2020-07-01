const express = require('express')
const app = express()

//logging 
const morgan = require('morgan')
app.use(morgan('dev'))

//body parsing middleware
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


//server
const port = process.env.PORT || 3000
app.get('/', (req, res) => res.send('sup World!'))

//matches all requests to /api
app.use('/api', require('./api')) 

// error handler
app.use(function(err, req, res, next) {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})

app.listen(port, () => console.log(`Price Checker Server listening at http://localhost:${port}`))