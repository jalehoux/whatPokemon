// Pull in required dependencies
var path = require('path');

// Import the list of friend entries
var list = require('../data/pokemon.js');

module.exports = function(app) {

	app.post('/api/pokemon', function(req, res) {
        console.log(req.body);
		res.json(list);
    });
}