var express = require('express');
var router = express.Router();

/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('Hey ! It\'s a GET');
});*/

/* GET user with ID. */
/*router.get('/:id(\\d+)', function(req, res, next) {
  res.send('Hey ! It\'s a GET with ID ' + req.params.id);
});*/

/* PUT user . */
/*router.put('/:name(\[a-z]*)', function (req, res, next) {
  res.send('Hey my name is ' + req.params.name );
});*/

/* POST user creation. */
/*router.post('/', function(req, res, next) {
  res.send('Hey ! It\'s a POST');
});*/

/* DELETE user creation. */
/*router.delete('/:id(\\d+)', function (req, res, next) {
  res.send('Hey it\'s a delete ID ' + req.params.id);
});*/


router.get('/:(\[a-z]*)', function(req, res, next) {
  res.render('update-user');
});

router.put('/:user', function(req, res){
  res.send('The new name is' + req.body.prenom)
});

router.get('/:(\\d+)',function(req,res,next){
  res.render('delete-user')
});

router.delete('/:id',function(req,res){
  console.log(req.body);
  res.send('No more user with id' + req.body.num)
});

module.exports = router;