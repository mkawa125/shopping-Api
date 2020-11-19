let product = require('./products.model');
const productService = require('./product.service');

module.exports = {
    getProducts: async (req, res) => {
        productService.getAllProducts()
        .then(products => res.json(products))
        .catch(err => next(err));
    },

    addProduct: async (req, res) => {
        productService.addProduct(req.body)
        .then(product => res.json(product))
        .catch(err => next(err));
    },

    // Update Selected Product
    updateProduct: async (req, res) => {
        res.json('Am edit this product')
    },

    // Remove | Delete product from database
    deleteProduct: async (req, res) => {
        product.findByIdAndRemove({_id: req.params.id}, function(err){
            if(err) {
                res.status(400).json(err);
            }
            else {
                res.status(200).json('Product Successfully Delete');
            }
        });
    }
};
