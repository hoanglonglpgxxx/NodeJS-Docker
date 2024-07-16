const express = require('express');
const path = require('node:path');
const app = express();
const dotenv = require('dotenv').config();
const webRoutes = require('./routes/web');
const mysql = require('mysql2');

const port = process.env.PORT || 3000;

//Serving static files
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

//Define routes
app.use('/', webRoutes);

//test mysql connection
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connection.query(
    'SELECT * FROM Users u',
    function (err, results, fields) {
        console.log('>>> results', results); // results contains rows returned by server
        console.log('>>> fields', fields); // fields contains extra meta data about results, if available
    }
);


app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});