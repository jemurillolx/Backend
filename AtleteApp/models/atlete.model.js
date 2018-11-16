const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AtleteSchema = new Schema({
    name: {type: String, required: false, max: 100},
    mail: {type: String, required: false, max: 100},
    years: {type: Number, required: false},
    birthday: {type: String, required: false, max: 100},
    status: {type: Number, required: false, default: 0}
});


// Export the model
module.exports = mongoose.model('Atlete', AtleteSchema);