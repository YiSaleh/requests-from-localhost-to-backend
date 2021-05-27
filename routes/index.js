var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'sdsadasd' });
});

/* GET users listing. */
router.get('/hello/:name', function(req, res, next) {
  console.log({req: req.params.name});

  res.send('hello ' +req.params.name + ' express is welcoming u' );
  
});

module.exports = router;
