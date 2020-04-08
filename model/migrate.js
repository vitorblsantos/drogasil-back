const Connection = require('./connection')

const db = new Connection()

db.run('PRAGMA foreign_keys = true;')

db.run(
  'CREATE TABLE IF NOT EXISTS origin(id_origin INTEGER PRIMARY KEY AUTOINCREMENT, description varchar(3), status boolean)',
  (err) => (err ? console.error(err) : '')
)
db.run(
  'CREATE TABLE IF NOT EXISTS dest(id_dest INTEGER primary key AUTOINCREMENT, origin INTEGER, description varchar(3), status boolean, FOREIGN KEY(origin) REFERENCES origin(id_origin))',
  (err) => (err ? console.error(err) : '')
)

db.run('CREATE TABLE IF NOT EXISTS price(id_price INTEGER primary key AUTOINCREMENT, price varchar(4), origin integer, dest integer, FOREIGN KEY(origin) references origin(id_origin), FOREIGN KEY(dest) references dest(id_dest))')

console.info('Migration worked! :)')
