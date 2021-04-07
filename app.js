const path = require('path')

const mysql = require("mysql");
const express = require('express')
const dotenv = require("dotenv");

dotenv.config();

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

const regRoutes = require('./routes/registration')
const connection = require("./util/db");

connection

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use(express.static(path.join(__dirname, 'public')))

app.use(regRoutes)

app.listen(3000, function(){
    console.log("Starting web server on: 3000")
    console.log("Open browser and redirect to http://localhost:3000")
})