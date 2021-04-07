const express = require('express')

const regController = require('../controllers/registration')

const router = express.Router()

router.get('/', regController.getHome)

router.get('/reg', regController.getRegister)

router.get('/preview', regController.getReview)

router.post('/preview', regController.postReview)

router.post('/submit', regController.submit);

router.get('/confirmation', regController.confirmation);

router.get('/cancel', regController.cancel);

module.exports = router