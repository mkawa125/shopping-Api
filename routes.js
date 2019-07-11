const Products = require('./app/routes/products.route');

module.exports = app => {
    app.use('/v1/products/', Products);
};
