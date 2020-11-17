let product = require('./products.model');

module.exports = {
    getProducts: async (req, res) => {
        product.find(function (err, products) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(
                    {
                        "success": true,
                        "message": "Products retrieved successfully",
                        "products": products
                    },
                );
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
