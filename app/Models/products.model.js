const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Products
let Product = new Schema({
    title: {
        type: String
    },
    body: {
        type: String
    }
},{
    collection: 'posts'
});

module.exports = mongoose.model('Product', Product);
