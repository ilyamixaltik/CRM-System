const mongoose = require('mongoose')

let orderSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    order: { type: Number, required: true },
    list: [{
        name: { type: String },
        quantiry: { type: Number },
        cost: { type: Number }
    }],
    user: { ref: 'users', type: mongoose.Schema.Types.ObjectId }
});

module.exports = mongoose.model('orders', orderSchema);