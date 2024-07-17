const connection = require('../config/db');

const getAllUsers = async () => {
    const [results, fields] = await connection.query(
        `select * from Users u`
    );

    return results;
};

module.exports = {
    getAllUsers
}

