const mysql = require('mysql');

const config = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'hainam2619',
    database: 'FindRoom',
};

const pool = mysql.createPool(config);

pool.getConnection(err => {
    if (err) console.log(err);
    else console.log('Server Connected!...');
});

const logQuery = (sql, params) => {
    console.log('\x1b[32m', 'sql: ',
        mysql.format(sql, params)
            .replace(/\r?\n|\r/g, ' ')
            .split(' ').filter(e => e !== '').join(' '));
}

const query = (sql, params) => {
    logQuery(sql, params);
    return new Promise((resolve, reject) => {
        pool.query(sql, params, (err, results) => {
            if (err) reject(err);
            else return resolve(results);
        })
    })
}

const queryOne = (sql, params) => {
    logQuery(sql, params);
    return new Promise((resolve, reject) => {
        pool.query(sql, params, (err, results) => {
            if (err) reject(err);
            return resolve(results);
        })
    })
};

module.exports = {
    query,
    queryOne
}