const express = require('express')
const router = express.Router()
const { getPins } = require('../controllers/mapController')

router.get('/pins', getPins)

module.exports = router
