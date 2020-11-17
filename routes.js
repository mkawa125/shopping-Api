const Products = require('./src/modules/products/products.route');

module.exports = app => {
    app.use('/v1/products/', Products);
};
