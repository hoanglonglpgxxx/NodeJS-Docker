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

const createNewUser = async (email, name, city) => {
    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, [email, name, city]
    );
    return results;
};

const updateUserById = async (email, name, city, userId) => {
    let [results, fields] = await connection.query(
        `UPDATE Users SET email = ?, name = ?, city = ? WHERE id = ?`, [email, name, city, userId]
    );
};

const deleteUserById = async (userId) => {
    let [results, fields] = await connection.query(
        `DELETE FROM Users WHERE id = ?`, [userId]
    );
};

module.exports = {
    getAllUsers,
    getUserById,
    createNewUser,
    updateUserById,
    deleteUserById
}

