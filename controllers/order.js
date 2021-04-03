const Order = require("../models/Order")
const errorHandler = require("../utils/errorHandler")

module.exports.getAll = async (req, res) => {
    let query = {
        user: req.user.id
    }

    if(req.query.start){
        query.date = {
            $gte: req.query.start
        }
    }

    if(req.query.end){
        if(!req.query.start) query.date = {}

        query.date['$lte'] = req.query.end
    }

    if(req.query.order){
        query.order = +req.query.order
    }

    try {
        const orders = await Order
            .findOne(query)
            .sort({ date: -1 })
            .skip(+req.query.offset)
            .limit(+req.query.limit)

        res.status(200).json(orders)

    } catch (err) {
        errorHandler(res, err)
    }
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