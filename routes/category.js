const express = require("express")
const router = express.Router()
const controller = require("../controllers/category")

router.get('/api/category', controller.getAll)
router.get('/api/category/:id', controller.getById)
router.delete('/api/category/:id', controller.remove)
router.post('/api/category', controller.create)
router.patch('/api/category/:id', controller.update)

module.exports = router