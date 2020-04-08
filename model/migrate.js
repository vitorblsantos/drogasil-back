const Connection = require('./connection')

const db = new Connection()

try {
  db.run(`
    CREATE TABLE IF NOT EXISTS routes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      origin CHAR(3),
      dest CHAR(3),
      price DEC,
      status BOOLEAN
    )
  `, (err) => !err ? console.info('Table created - routes') : console.error(err))
} catch {
  console.error('Migration failed')
}
