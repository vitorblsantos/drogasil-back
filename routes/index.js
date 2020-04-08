const router = require('express').Router()

router.get('/', (req, res) => {
  res.send('<h1>Server Working</h1>')
})


router.post('/route', (req, res) => {
  res.send('post working')
})

module.exports = router
