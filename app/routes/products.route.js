const Router = require('express');
const router = new Router();
const ProductsController = require('../Controllers/ProductsController');

//Product routes
router.route('/').get(ProductsController.getProducts);
router.route('/add').post(ProductsController.addProduct);
router.route('/delete/:id').delete(ProductsController.deleteProduct);
router.route('/update/:id').post(ProductsController.updateProduct);

module.exports=router;
