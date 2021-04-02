const Category = require("../models/Category")
const errorHandler = require("../utils/errorHandler")

module.exports.getAll = async (req, res) => {
    try {
        const categories = await Category.find({ user: req.user.id })
        res.status(200).json(categories)

    } catch (err) {
        errorHandler(res, err)
    }
}

module.exports.getById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id)
        res.status(200).json(category)
        
    } catch (err) {
        errorHandler(res, err)
    }
}

module.exports.remove = (req, res) => {
    
}

module.exports.create = (req, res) => {
    
}

module.exports.update = (req, res) => {
    
}