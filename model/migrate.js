const Connection = require('./connection')

const db = new Connection()

const data = [
  ['GRU', 'BRC', 10],
  ['GRU', 'SCL', 18],
  ['GRU', 'ORL', 56],
  ['GRU', 'CDG', 75],
  ['SCL', 'ORL', 20],
  ['BRC', 'SCL', 5],
  ['ORL', 'CDG', 5]
]

try {
  db.run(
    `
    CREATE TABLE IF NOT EXISTS routes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      origin CHAR(3),
      dest CHAR(3),
      price DEC,
      status BOOLEAN
    )
  `,
    (err) => {
      if (!err) {
        db.all(
          `
          SELECT count(*) as count FROM routes
        `,
          (err, rows) => {
            if (!err) {
              const { count } = rows[0]
              if (count === 0) {
                data.map((single) => {
                  db.all(
                    'INSERT INTO routes(origin,dest,price,status) VALUES(?,?,?,?)',
                    [single[0], single[1], single[2]],
                    (err) => err && console.log(err)
                  )
                })
              }
            }
          }
        )
      }
    }
  )
} catch {
  console.error('Migration failed')
}
