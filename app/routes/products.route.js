const Router = require('express');
const router = new Router();
const ProductsCOntroller = require('app/Controllers/ProductsController');



router.route('/').get(function (req, res) {
    res.status(200).json({'business': 'business is added successfully'});
});

router.route('/add').post(function (req, res) {

});

module.exports=router;
