const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

app.use(express.static(path.join(__dirname, './app/public')));
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.listen(3000, () => console.log('Example app listening on port 3000!'))