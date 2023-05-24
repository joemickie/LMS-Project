const express = require('express');
const router = express.Router();
const { getEnrolleeProfile } = require('../controllers/enrolleeController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/profile', authMiddleware, getEnrolleeProfile);

module.exports = router;
