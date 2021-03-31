module.exports.login = (req, res) => {
    res.status(200).json({
        login: 'from controller'
    })
}