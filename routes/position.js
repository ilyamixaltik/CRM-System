const express = require("express")
const router = express.Router()
const controller = require("../controllers/category")

router.get('/api/position/:category', controller.getByCategoryId)
router.post('/api/position', controller.create)
router.patch('/api/position/:id', controller.update)
router.delete('/api/position/:id', controller.remove)

module.exports = router