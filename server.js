const express = require('express')()
const router = require('./controller/routes')

express.use('/', router)
express.listen(1998)