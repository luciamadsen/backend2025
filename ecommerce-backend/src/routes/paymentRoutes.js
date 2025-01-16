const express = require('express');
const router = express.Router();
const PaymentController = require('../controllers/paymentController');

router.post('/', PaymentController.createPayment);

module.exports = router;
