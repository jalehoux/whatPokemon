const express = require('express')
const app = express()
const htmlroute = require('./app/routing/htmlRoutes')

app.use(express.static('app/public'))
app.use(htmlroute)

app.listen(3000, () => console.log('Example app listening on port 3000!'))