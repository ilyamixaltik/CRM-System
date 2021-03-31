const mongoose = require('mongoose')

let categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    imageSrc: { type: String, default: '' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'users'}
});

module.exports = mongoose.model('categories', categorySchema);