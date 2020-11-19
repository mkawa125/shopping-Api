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

    addProduct: async (userInput) => {
        const product = new productModel(userInput);
        return await product.save()
    }
}