const express = require('express');
const router = express.Router();
const helper = require('../helper/app');

router.route('/')
.get(helper.getHomePage);

module.exports = router;