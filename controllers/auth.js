const User = require("./models/User")

module.exports.login = (req, res) => {
    res.status(200).json({
        login: { 
            email: req.body.email, 
            password: req.body.password 
        }
    })
}

module.exports.register = async (req, res) => {
    const $user = new User({
        email: req.body.email,
        password: req.body.password
    })

    await $user.save()
}