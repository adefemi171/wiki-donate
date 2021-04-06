const express = require('express')

const regController = require('../controllers/registration')

const router = express.Router()

router.get('/', regController.getHome)

router.get('/reg', regController.getRegister)

router.get('/review', regController.getReview)

router.post('/review', regController.postReview)

module.exports = router