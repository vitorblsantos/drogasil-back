const sqlite3 = require('sqlite3').verbose()

module.exports = class Connection {
  constructor () {
    return new sqlite3.Database('../database.sqlite', (err) => (err || ''))
  }
}
