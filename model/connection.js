const sqlite3 = require('sqlite3');

const connection = new sqlite3.Database('db.sql');

module.exports = connection;