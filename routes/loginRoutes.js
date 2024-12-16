const express = require('express');
const loginController = require('../controller/loginController');

const router = express.Router();

router.post('/api/register', loginController.registerUser);
router.post('/api/login', loginController.loginCheck);
router.post('/api/idCheck', loginController.checkIdDup);

module.exports = router;