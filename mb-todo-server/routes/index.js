var express = require('express');
var router = express.Router();
var path = require('path');
const indexPath = path.join(__dirname, '../public', 'public', 'index.html');

console.log(indexPath);


module.exports = function(app){
  app.get('*', function(req, res, next){
    res.sendfile(indexPath);
  });
};
