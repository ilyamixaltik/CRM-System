const express = require("express")
const router = express.Router()
const controller = require("../controllers/order")

router.get('/order', controller.getAll)
router.post('/order', controller.create)

module.exports = router