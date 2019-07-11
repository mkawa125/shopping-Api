const Router = require('express');
const router = new Router();


// Require Post model in our routes module
// let Post = require('/app/Models/products.model');

// Defined get data(index or listing) route
router.route('/').get(function (req, res) {
    res.status(200).json({'business': 'business is added successfully'});
});

// Defined store route
router.route('/add').post(function (req, res) {

});

module.exports=router;
