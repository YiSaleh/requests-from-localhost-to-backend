var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'sdsadasd' });
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
});

/* GET users listing. */
router.get('/hello/:name  ', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.send('hello ' +req.params.name + ' express is welcoming u' );
  console.log({req: req.params.name});

});

// post request to post data from browser to server
router.post('/response',(req, res) => {
  // var response = req.body.response;
  
  console.log("response = "+req.body);
});

module.exports = router;

