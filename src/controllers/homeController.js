const connection = require('../config/db');

const getHomePage = (req, res) => {
    return res.render('home.ejs');
};

const getSamplePage = (req, res) => {
    let users = [];
    //test mysql connection
    connection.query(
        'SELECT * FROM Users u',
        function (err, results, fields) {
            console.log('>>> results', results); // results contains rows returned by server
            console.log('>>> fields', fields); // fields contains extra meta data about results, if available
        }
    );


    res.send('AAAAAAAAAAAAAAAAAAAAAAAAAAAA');
};

module.exports = {
    getHomePage,
    getSamplePage
};