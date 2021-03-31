const mongoose = require('mongoose')

let positionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    cost: { type: Number, required: true },
    category: { ref: 'categories', type: mongoose.Schema.Types.ObjectId },
    user: { ref: 'users', type: mongoose.Schema.Types.ObjectId }
});

module.exports = mongoose.model('positions', positionSchema);