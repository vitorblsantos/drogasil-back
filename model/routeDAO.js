const Connection = require('./connection')

const conn = new Connection()

const saveRoute = async (origin, destination, price) => {
  return new Promise((resolve, reject) => {
    try {
      conn.run(
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
