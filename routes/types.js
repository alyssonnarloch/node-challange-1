var express = require('express');
var router = express.Router();

const Types = require('../controllers/types');

router.get('/', Types.findAll);

module.exports = router;
