const express = require('express');
const productRoutes = express.Router();

// Require Post model in our routes module
let Post = require('/app/Models/products.model');

// Defined get data(index or listing) route
productRoutes.route('/').get(function (req, res) {
    Post.find(function(err, posts){
        if(err){
            res.json(err);
        }
        else {
            res.json(posts);
        }
    });
});

// Defined store route
productRoutes.route('/add').post(function (req, res) {
    let post = new Post(req.body);
    post.save()
        .then(() => {
            res.status(200).json({'business': 'business is added successfully'});
        })
        .catch(() => {
            res.status(400).send("unable to save to database");
        });
});

module.exports = productRoutes;
