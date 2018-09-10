var express = require('express')
var path = require('path')
var htmlroute = express.Router();

htmlroute.get('/survey', function(req, res){
    res.sendFile(path.join(__dirname, '..', '../app/public/survey.html'));
    console.log("understood")
  });
  
module.exports = htmlroute;