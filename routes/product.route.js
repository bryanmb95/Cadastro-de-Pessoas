const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controllers/product.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', product_controller.test);
module.exports = router;

// route for create a product
router.post('/create', product_controller.product_create);

// route to read a product
router.get('/:id', product_controller.product_details);

// route to update a product
router.put('/:id/update', product_controller.product_update);

// route to delete a product
router.delete('/:id/delete', product_controller.product_delete);