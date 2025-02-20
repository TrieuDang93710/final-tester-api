const express = require('express');
const router = express.Router();

const paymentController = require('../controllers/paymentController');
const verifyToken = require('../middleware/verifyToken');
const verifyAdmin = require('../middleware/verifyAdmin');

router.get('/', verifyToken, paymentController.getAllPayments);
router.get('/email', verifyToken, paymentController.getPaymentByEmail);
router.post('/', verifyToken, paymentController.createPayment);
router.patch('/admin/:id', verifyToken, verifyAdmin, paymentController.makePaymentStatus);

module.exports = router;
