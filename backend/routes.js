const express = require('express')
const apiControllers = require('./controllers/api')

const router = express.Router()

router.post('/getQuestion',apiControllers.getQuestion);

module.exports = router;