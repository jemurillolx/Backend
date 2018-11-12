//app.js

const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/atlete.route'); // Imports routes for the products
const app = express();

app.use('/atletes', product);

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
/*
http://localhost:1234/atletes/test
*/