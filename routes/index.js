const { route, quote } = require('../controller')
const router = require('express').Router()

router.get('/', (req, res) => {
  res.send('<h1>Server Working</h1>')
})

router.get('/quote/:from/:to', async (req, res) => {
  try {
    const { from, to } = req.params
    const response = await quote(from, to)
    res.send(response)
  } catch {
    res.send('Controller error - Quote')
  }
})

router.post('/route', async (req, res) => {
  try {
    const { from, to, price } = req.body
    const status = await route(from, to, price)
    res.send({ status })
  } catch {
    res.send('Controller error - Route')
  }
})

module.exports = router
