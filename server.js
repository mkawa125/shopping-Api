const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4007;
const mongoose = require('mongoose');
const config = require('./DB.js');
const productRoute = require('app/routes/products.route');
const cors = require('cors');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => { console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/products', productRoute);

app.listen(PORT, function(){
    console.log('Server is running on Port:',PORT);
});
