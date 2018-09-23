// Pull in required dependencies
var path = require('path');

// Import the list of friend entries
var list = require('../data/pokemon.js');

module.exports = function(app) {

	app.post('/api/pokemon', function(req, res) {
        var myValues = req.body.sent;
        var difference = [];
        for(i=0;i<list.length;i++){
            for(j=0;j<list[i].scores.length;j++){
                var result = compare(parseInt(myValues[i]), list[i].scores[j]);
                difference.push(result);
            }
        }
        var smallerArrays = [];
        var size = 10;
        for(i=0;i<difference.length;i+=size){
            var array = difference.slice(i,i+size)
            smallerArrays.push(array)
        }

        var arraysreduced = [];
        for(i=0;i<smallerArrays.length;i++){
            arraysreduced.push(smallerArrays[i].reduce(sumarrays));
        }
        var index=0;
        var value=arraysreduced[0];
        for(i=0;i<arraysreduced.length;i++){
            if(arraysreduced[i]<value){
                value=arraysreduced[i];
                index=i;
            }
        }
        var chosenFriend = list[index];
        function sumarrays(num1, num2){
            return num1 + num2
        }
        function compare(num1, num2){
            return Math.abs(num1 - num2)
        }
		res.json(chosenFriend);
    });
}