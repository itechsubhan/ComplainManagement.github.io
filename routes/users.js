var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.write('respond with a resource');
  res.write('respond with a resource');
  res.write('respond with a resource');
  res.write('respond with a 11 resource');
  res.send();
  console.log('in users js file');


});

module.exports = router;
