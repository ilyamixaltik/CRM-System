const Order = require("../models/Order")
const errorHandler = require("../utils/errorHandler")

module.exports.getAll = (req, res) => {

}

module.exports.create = async (req, res) => {
    try {
        const lastOrder = await Order.findOne({ _id: req.user.id }).sort({ date: -1 })
        const maxOrder = lastOrder ? lastOrder.order : 0

        const order = await new Order({
            order: maxOrder + 1,
            list: req.body.list,
            user: req.user.id
        }).save()

        res.status(201).json(order)

    } catch (err) {
        errorHandler(res, err)
    }
}