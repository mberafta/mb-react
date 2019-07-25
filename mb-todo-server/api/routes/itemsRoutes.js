let itemsController = require('../controllers/itemsController');

module.exports = function(router){
    router.get('/items', itemsController.getItems);
};

