const sqlite3 = require("sqlite3");

const connection = new sqlite3.Database("../db/db.sql", (err) =>
  console.error("db con error", err)
);

module.exports = connection;
