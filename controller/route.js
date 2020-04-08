const routeDAO = require('../model')

const route = async (origin, destination, price) => {
  try {
    return await routeDAO.saveRoute(origin, destination, price)
  } catch(e) {
    return e
  }
}

module.exports = route
