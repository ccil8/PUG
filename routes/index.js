var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/coucou-pug', function(req, res, next) {
  res.render('coucou', { title: 'Coucou le monde !', sayHello: 'Hello buddy' });
});

module.exports = router;
