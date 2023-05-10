const mysql = require('mysql');

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password :'whs20102011',
    database : 'icelinks'
});

module.exports = db;


