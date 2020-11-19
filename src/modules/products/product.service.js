/**
 * Functions needs to be imported on service
 * Database model
 * Configuration model
 */

const productModel = require('./products.model');

module.exports = {

    getAllProducts: async () => {
        return await productModel.find();
    },

    addProduct: async (productParam) => {
        const product = new productModel(productParam);
        return await product.save()
    },

    updateProduct: async (productId, productParam) => {
        const product = await productModel.findById(productId);
        if (!product) {
            return ({
                "userMessage": "Product not found",
                "developerMessage": "Poduct with given id does not exist"
            });
        }
        /** Copy productParam details to product  */
        Object.assign(product, productParam);

        return await product.save()
    },

    deleteProduct: async (productId) => {
        const product = await productModel.findByIdAndDelete(productId);
    }
}