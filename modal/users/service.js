const pool = require('../../database')
module.exports = {
    create: (data, callback) => {
        pool.query(`INSERT INTO users(first_name, last_name, email, password)VALUES(?,?,?,?)`, 
            [
                data.first_name,
                data.last_name,
                data.email,
                data.password
            ],
            (error, results) => error ? callback(error) : callback(null, results)
        )
    },
    getUsers: (callback) => {
        pool.query(`SELECT id, first_name, last_name, email FROM users`,
            [],
            (error, results) => error ? callback(error) : callback(null, results)
        )
    },
    getUserById: (id, callback) => {
        pool.query(`SELECT id, first_name, last_name, email FROM users where id = ?`,
            [id],
            (error, results) => error ? callback(error) : callback(null, results[0])
        )
    },
    updateUser: (data, callback) => {
        pool.query(`UPDATE users set first_name=?, last_name=?, email=?, password=? WHERE id = ?`,
            [
                data.first_name,
                data.last_name,
                data.email,
                data.password,
                data.id
            ],
            (error, results) => error ? callback(error) : callback(null, results)
        )
    },
    deleteUser: (data, callback) => {
        pool.query(`DELETE FROM users WHERE id = ?`,
            [data.id],
            (error, results) => error ? callback(error) : callback(null, results)
        )
    },
    getUserByEmail: (data, callback) => {
        pool.query(`SELECT email, password FROM users WHERE email = ?`,
            [data.email],
            (error, results) => error ? callback(error) : callback(null, results[0])
        )
    }
}