var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/cool', (req, res)=>{
  res.set('Content-Type', 'text/html');
  res.send(Buffer.from('<h2>your so cool!!</h2>'));
});

module.exports = router;
