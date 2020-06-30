const express = require('express')
const app = express()

//body parsing middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//server
const port = process.env.PORT || 3000
app.get('/', (req, res) => res.send('sup World!'))

// matches all requests to /api
app.use('/api', require('./api')) 

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))