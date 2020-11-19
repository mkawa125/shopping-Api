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

    updateProduct: async (req, res) => {
        productService.updateProduct(req.params.id, req.body)
        .then(product => res.status(200).json(product))
        .catch(err => next(err));
    },

    // Remove | Delete product from database
    deleteProduct: async (req, res) => {
        productService.deleteProduct(req.params.id)
        .then(() => res.status(200).json({
            "userMessage": "Poduct deleted successfully",
            "developerMessage": "Product successfully deleted",
        }))
        .catch(err => next(err));
    }
};
