const Position = require("../models/Position")
const errorHandler = require("../utils/errorHandler")

module.exports.getByCategoryId = async (req, res) => {
    try {
        const positions = await Position.find({
            category: req.params.categoryId,
            user: req.user.id
        })

        res.status(200).json(positions)
        
    } catch (err) {
        errorHandler(res, err)
    }
}

module.exports.create = (req, res) => {
    
}

module.exports.remove = (req, res) => {
    
}

module.exports.update = (req, res) => {
    
}