const express = require('express');
const path = require('node:path');
const app = express();
const dotenv = require('dotenv').config();
const webRoutes = require('./routes/web');
const connection = require('./config/db');
const port = process.env.PORT || 3000;

//Serving static files
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

//Define routes
app.use('/', webRoutes);

//test mysql connection
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