const Router = require('express');
const router = new Router();
const ProductsController = require('../Controllers/ProductsController');

//Product routes
router.route('/').get(ProductsController.getProducts);

module.exports=router;
