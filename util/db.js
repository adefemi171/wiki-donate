const mysql = require('mysql');
const dotenv = require("dotenv");

dotenv.config();


const { DB_HOST } = process.env;
const { DB_USER } = process.env;
const { DB_PASS } = process.env;
const { DB_NAME } = process.env;

const connection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME
});

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);

    const sql = "CREATE TABLE IF NOT EXISTS user (lname VARCHAR(50), fname VARCHAR(50), street VARCHAR(25), city VARCHAR(25),state VARCHAR(25),country VARCHAR(25),pcode VARCHAR(10),phone VARCHAR(13),email VARCHAR(30),formOfContact VARCHAR(10),formOfPayment VARCHAR(4),freqOfDonation VARCHAR(10),amtOfDonation VARCHAR(255), comments VARCHAR(255))";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result, "Table created");
    });
});


module.exports = connection;