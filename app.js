// app.js
const express = require('express');
const bodyParser = require('body-parser');
const product = require('./AtleteApp/routes/atlete.route'); // Imports routes for the products
const app = express();
//redis cache
const redis = require('redis');
const methodoverride = require('method-override');
const exphbs = require('express-handlebars');
var cache = require('express-redis-cache')({
    port: 6379,
    host: 'localhost',
    authPass: null,
    db: 0,
    prefix: 'home',
    enabled: true
});
// connect to Redis
const REDIS_URL = process.env.REDIS_URL;
const client = redis.createClient(REDIS_URL);

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://jOrgito:jOrgito2018@ds161183.mlab.com:61183/jorgito';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;

//port mongo
let port = 4000;
/**redis server exit */

//view engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('cache', cache)
//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/home', product);

//method override
app.use(methodoverride('method'));

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

client.on('connect', () => {
    console.log(`connected to redis`);
});
client.on('error', err => {
    console.log(`Error: ${err}`);
});

module.exports = app;