const express = require('express');
const router = express.Router();
const helper = require('../helper/app');


router.route('/')
.post(helper.createGame)

module.exports = router;