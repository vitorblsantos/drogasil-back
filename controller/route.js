const routeDAO = require('../model')

const route = async (origin, destination, price) => {
  try {
    return await routeDAO.saveRoute(origin, destination, price)
  } catch {
    return 'Controller failed - route'
  }
}

module.exports = route
