const Connection = require('../model/connection')

const db = new Connection()

// class Route {
//   constructor () {

//   }
// }

const getDest = (to) => {
  return new Promise((resolve, reject) => {
    try {
      db.all('SELECT * FROM routes where dest = ?', [to], (err, row) => {
        if (err) return reject(err)
        resolve(row)
      })
    } catch (e) {
      reject(e)
    }
  })
}

const getQuote = (origin, dest) => {
  return new Promise((resolve, reject) => {
    try {
      db.all(
        'SELECT * FROM routes where origin = ? and dest = ?',
        [origin, dest],
        (err, row) => {
          if (err) return reject(err)
          resolve(row[0])
        }
      )
    } catch (e) {
      reject(e)
    }
  })
}

module.exports = {
  getQuote,
  getDest
}
