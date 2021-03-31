const express = require("express")
const router = express.Router()
const controller = require("../controllers/category")

router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.delete('/:id', controller.remove)
router.post('/', controller.create)
router.patch('/:id', controller.update)

module.exports = router