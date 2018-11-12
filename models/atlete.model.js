const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AtleteSchema = new Schema({
    name: {type: String, required: true, max: 100},
    years: {type: Number, required: false},
    mail: {type: String, required: true, max: 100},
    comments: {type: String, required: false, max: 100},
    status: {type: Boolean, required: true},
});


// Export the model
module.exports = mongoose.model('Product', AtleteSchema);