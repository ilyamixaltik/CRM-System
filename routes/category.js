const express = require("express")
const router = express.Router()
const controller = require("../controllers/category")

router.get('/category', controller.getAll)
router.get('/category/:id', controller.getById)
router.delete('/category/:id', controller.remove)
router.post('/category', controller.create)
router.patch('/category/:id', controller.update)

module.exports = router