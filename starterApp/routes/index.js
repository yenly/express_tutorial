var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

// example of calling controller.main
// router.get('/', controller.main);

module.exports = router;
