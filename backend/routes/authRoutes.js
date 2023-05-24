const express = require('express');
const router = express.Router();
const { registerEnrollee, loginEnrollee } = require('../controllers/authController');

router.post('/register', registerEnrollee);
router.post('/login', loginEnrollee);

module.exports = router;
