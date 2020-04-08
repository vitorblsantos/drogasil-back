const { route } = require('../controller')
const router = require('express').Router()

router.get('/', (req, res) => {
  res.send('<h1>Server Working</h1>')
})

router.post('/route', (req, res) => {
  try {
    const { from, to, price } = req.body
    route(from, to, price).then((response) => res.send(response))
  } catch {
    res.send('Erro no padrão: route/<FROM>/<TO>/<PRICE>')
  }
})

module.exports = router
