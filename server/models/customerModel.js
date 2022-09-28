const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: false },
    imageUrl: { type: String, required: false },
});

const Customer = mongoose.model('customer', customerSchema);

module.exports = Customer;