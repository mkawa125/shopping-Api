const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Products
let Product = new Schema(
    {
        name:   { type: String},
        price:  { type: Number },
        quantity: { type: Number },
        visibility:   { type: String },
        category:   { type: String },
        image:   { type: String },
    },
    {
        collection: 'products'
    });

module.exports = mongoose.model('Product', Product);
