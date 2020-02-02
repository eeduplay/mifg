var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

const response = {
  fuelmass: 1000,
  mirrorsize: 123
};

router.get('/calculator', function(req, res, next) {
  res.send(response);
});

module.exports = router;
