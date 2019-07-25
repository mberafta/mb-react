var express = require('express'),
    router = express.Router();

// Routes imports 
const itemsRoutes = require('../routes/itemsRoutes');

itemsRoutes(router);

module.exports = router;