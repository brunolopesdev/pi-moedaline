var express = require('express');
var router = express.Router();
const controller = require('../controllers/cadastro-controller')

/* GET registration page. */
router.get('/', controller.cadastro)

module.exports = router;