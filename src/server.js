const express = require('express');
const path = require('node:path');
const app = express();
const dotenv = require('dotenv').config();
const webRoutes = require('./routes/web');
const port = process.env.PORT || 3000;

//Serving static files
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

//Define routes
app.use('/', webRoutes);




app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});