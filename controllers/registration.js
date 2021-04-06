const path = require('path')

exports.home = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'home.html'))
}

exports.register = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'registration.html'))
}