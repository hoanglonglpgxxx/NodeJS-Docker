const connection = require('../config/db');

const getHomePage = async (req, res) => {
    const [results, fields] = await connection.query(
        `select * from Users u`
    );
    return res.render('home.ejs', {
        title: 'Home',
        users: resultsasdas
    });
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

const getUserAddingPage = (req, res) => {
    return res.render('user.ejs', {
        title: 'Add User'
    });
};

const createUser = async (req, res) => {
    const { email, name, city } = req.body;
    if (email.length && name.length && city.length) {
        let [results, fields] = await connection.query(
            `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, [email, name, city]
        );
        if (results.affectedRows === 1) {
            return res.send('User created successfully');
        } else {
            return res.send('Failed to create user');
        }
    } else {
        res.send('Invalid input');

    }
};

module.exports = {
    getHomePage,
    getSamplePage,
    createUser,
    getUserAddingPage
};