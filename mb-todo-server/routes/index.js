var express = require('express');
var router = express.Router();
var path = require('path');

const mainApiRoutes = require('../api/routes/main');
const indexPath = path.join(__dirname, '../public', 'public', 'index.html');

module.exports = function(app){

  // Considération des routes API
  app.use('/api', mainApiRoutes);

  // Cela permet d'avoir le index.html en layout permanent pour une SPA
  app.get('*', function(req, res, next){
    res.sendfile(indexPath);
  });
};
