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

    res.send('test');
};

const createUser = (req, res) => {
    const { email, name, city } = req.body;
    if (email.length && name.length && city.length) {
        connection.query(
            'INSERT INTO Users (email, name, city) VALUES (?, ?, ?)', [email, name, city]),
            function (err, results) {
                if (err) {
                    console.log('Error: ', err);
                    res.send('Internal server error');
                }
            };
    } else {
        res.send('Invalid input');

    }
};

module.exports = {
    getHomePage,
    getSamplePage,
    createUser
};