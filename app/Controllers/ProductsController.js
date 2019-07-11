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
        newProduct.save()
            .then(() => {
                res.status(200).json(newProduct);
            })
            .catch(() => {
                res.status(400).send("unable to save to add product");
            });
    }
};
