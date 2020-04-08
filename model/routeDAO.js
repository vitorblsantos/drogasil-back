const Connection = require('./connection')

const db = new Connection()

const saveRoute = async (origin, destination, price) => {
  return new Promise((resolve, reject) => {
    try {
      db.run(
        'INSERT INTO routes(origin,dest,price,status)values(?,?,?,?)',
        [origin, destination, price, true],
        (err) => (!err ? resolve('Route saved') : '')
      )
    } catch (e) {
      reject(e)
    }
  })
}

const getRoute = () => {}

module.exports = {
  saveRoute,
  getRoute
}
