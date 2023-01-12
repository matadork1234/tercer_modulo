const express = require('express');
const { informationApi } = require('../contollers/information.controller');

const router = express.Router();

router.get('/', informationApi)

module.exports = router;