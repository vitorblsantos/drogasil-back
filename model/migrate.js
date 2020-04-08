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
    `CREATE TABLE IF NOT EXISTS routes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      origin CHAR(3),
      dest CHAR(3),
      price DEC,
      status BOOLEAN
    )
  `,
    (err) => {
      if (err) return
      db.all('SELECT count(*) as count FROM routes', async (err, rows) => {
        if (err) return
        const { count } = rows[0]
        if (count > 0) return
        for (let i = 0; i < data.length; i++) {
          await db.all(
            'INSERT INTO routes(origin,dest,price,status) VALUES(?,?,?,?)',
            [data[i][0], data[i][1], data[i][2], true],
            (err) => err
          )
        }

        console.info('Migration complete')
      })
    }
  )
} catch {
  console.error('Migration failed')
}
