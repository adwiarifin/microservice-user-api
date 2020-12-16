const express = require('express');
const router = express.Router();
const user = require('./handler/user');

router.post('/login', user.login);

module.exports = router;
