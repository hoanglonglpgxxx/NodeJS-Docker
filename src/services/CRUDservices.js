const connection = require('../config/db');

const getAllUsers = async () => {
    const [results, fields] = await connection.query(
        `SELECT * FROM Users u`
    );

    return results;
};

const getUserById = async (userId) => {
    const [results, fields] = await connection.query(
        `SELECT * FROM Users u WHERE u.id = ?`, [userId]
    );

    const user = results ? results[0] : [];

    return user;
};

module.exports = {
    getAllUsers,
    getUserById
}

