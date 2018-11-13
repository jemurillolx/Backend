const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AtleteSchema = new Schema({
    name: {type: String, required: true, max: 100},
    mail: {type: String, required: true, max: 100},
    years: {type: Number, required: false},
    bithday: {type: String, required: false, max: 100},
    status: {type: Number, required: true, default: 0},
});


// Export the model
module.exports = mongoose.model('Atlete', AtleteSchema);