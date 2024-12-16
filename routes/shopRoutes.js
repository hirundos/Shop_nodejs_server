const express = require('express');
const shopController = require('../controller/shopController');

const router = express.Router();

router.get('/api/prod', shopController.getProducts);

module.exports = router;