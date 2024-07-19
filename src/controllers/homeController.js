const connection = require('../config/db');
const { getAllUsers, getUserById } = require('../services/CRUDservices');

const getHomePage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', {
        title: 'Home',
        users: results ?? []
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

const getUpdatePage = (req, res) => {
    const userId = req.params.userId;
    if (userId) {
        getUserById(userId).then((user) => {
            if (user.length === 0) {
                return res.render('404.ejs', {
                    title: '404'
                });
            }
            return res.render('updateUser.ejs', {
                title: 'Update user',
                formTitle: `Update user ${user.name}`,
                user
            });
        });
    } else {
        return res.render('404.ejs', {
            title: '404'
        });
    }
};

module.exports = {
    getHomePage,
    getSamplePage,
    createUser,
    getUpdatePage,
    getUserAddingPage
};