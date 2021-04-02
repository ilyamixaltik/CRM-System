const express = require("express")
const router = express.Router()

const upload = require("../middleware/upload")
const controller = require("../controllers/category")

router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.delete('/:id', controller.remove)
router.post('/', upload.single('image'), controller.create)
router.patch('/:id', upload.single('image'), controller.update)

module.exports = router