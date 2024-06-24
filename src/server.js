const express = require('express');
const path = require('node:path');
const app = express();
const dotenv = require('dotenv').config();
const webRoutes = require('./routes/web');

const port = process.env.PORT || 3000;
const hostname = process.env.HOST || 'localhost';

//Serving static files
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', webRoutes);

app.listen(port, hostname, () => {
    console.log(`App listening on port ${port}`);
});