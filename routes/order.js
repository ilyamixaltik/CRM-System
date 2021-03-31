const express = require("express")
const router = express.Router()
const controller = require("../controllers/order")

router.get('/api/order', controller.getAll)
router.post('/api/order', controller.create)

module.exports = router