const mysql = require('mysql');

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '1Knickstape!',
    database: 'blogposts',
})

module.exports = db