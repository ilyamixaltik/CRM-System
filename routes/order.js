const express = require("express")
const passport = require("passport")
const router = express.Router()
const controller = require("../controllers/order")

router.get('/', passport.authenticate('jwt', { session: false }), controller.getAll)
router.post('/', passport.authenticate('jwt', { session: false }), controller.create)

module.exports = router