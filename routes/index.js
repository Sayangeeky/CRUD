const express = require('express')
const router = express.Router()
const createController = require('../controllers/index')

router.post('/create', createController.createUser)

router.get('/read/:userName', createController.getUser)

module.exports = router