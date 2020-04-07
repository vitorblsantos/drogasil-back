const express = require('express')()
const router = require('./routes/')

express.use('/', router)
express.listen(1998)
