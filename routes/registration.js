const express = require('express')

const regController = require('../controllers/registration')

const router = express.Router()

router.get('/', regController.home)
router.get('/reg', regController.register)

module.exports = router