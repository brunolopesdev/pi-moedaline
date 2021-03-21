var express = require('express');
var router = express.Router();
const controller = require('../controllers/login-controller')

/* GET login page. */
router.get('/', controller.login)

module.exports = router;