const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    name: {type: String, required: true, max: 100},
    address: {type: String, required: true, max: 100},
    email: {type: String, required: true, max: 100},
    age: {type: Number, required: true},
    birthDate: {type: String, required: true, max: 100},
    city: {type: String, required: true, max: 100},
});


// Export the model
module.exports = mongoose.model('Product', ProductSchema);