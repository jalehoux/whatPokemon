const express = require('express')
const app = express()
const htmlroute = require('./app/routing/htmlRoutes')
const friendroute = require('./app/routing/friends.js')

app.use(express.static(path.join(__dirname, './app/public')));
app.use(htmlroute)
app.use(friendroute)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.listen(3000, () => console.log('Example app listening on port 3000!'))