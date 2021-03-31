const express = require("express")
const router = express.Router()
const controller = require("../controllers/category")

router.get('/position/:category', controller.getByCategoryId)
router.post('/position', controller.create)
router.patch('/position/:id', controller.update)
router.delete('/position/:id', controller.remove)

module.exports = router