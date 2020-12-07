const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'us-cdbr-east-02.cleardb.com',
    user: 'b9ce9ffb777a51',
    password: 'b9ce9ffb777a51',
    database: 'heroku_156c98f59588e85',
})

module.exports = db