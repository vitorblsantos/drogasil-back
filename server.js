const bodyParser = require('body-parser')
const express = require('express')()
const router = require('./routes/')

express.use(bodyParser.json())
express.use('/', router)
express.listen(1998)
