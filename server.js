const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, './app/public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

require(path.join(__dirname, './app/routing/htmlRoutes'))(app);
require(path.join(__dirname, './app/routing/apiRoutes'))(app);

app.listen(PORT, () => console.log('Example app listening on port ' + PORT))