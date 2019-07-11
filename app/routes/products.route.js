const Router = require('express');
const router = new Router();
const ProductsController = require('../Controllers/ProductsController');

//Product routes
router.route('/').get(ProductsController.getProducts);
router.route('/add').post(ProductsController.addProduct);

module.exports=router;
