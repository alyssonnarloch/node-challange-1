var express = require('express');
var router = express.Router();

var user = require('../controllers/users');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', user.findAll);
router.get('/:id', user.getById)
router.post('/', user.create);
//router.get('/seq/', user.findAll);

module.exports = router;
