const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

const regRoutes = require('./routes/registration')

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(express.static(path.join(__dirname, 'public')))

app.use(regRoutes)

app.listen(3000)