var express = require('express');
var router = express.Router();
const controller = require('../controllers/ferramenta-controller')

/* GET ferramenta page. */
router.get('/', controller.ferramenta)

module.exports = router;