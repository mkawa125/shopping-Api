let product = require('../Models/products.model');

module.exports = {
    getProducts: async (req, res) => {
        product.find(function (err, products) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(products);
            }
        })
    },

    addProduct: async (req, res) => {
        let newProduct = new product(req.body);
        res.json(newProduct);
    }
};
