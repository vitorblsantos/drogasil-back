const bodyParser = require('body-parser')
const express = require('express')()
const router = require('./routes/')

app.use(bodyParser.urlencoded({ extended: false }));
express.use(bodyParser.json())
express.use('/', router)
express.listen(1998)
