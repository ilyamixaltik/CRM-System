module.exports.login = (req, res) => {
    res.status(200).json({
        login: 'from controller'
    })
}

module.exports.register = (req, res) => {
    res.status(200).json({
        register: 'from controller'
    })
}