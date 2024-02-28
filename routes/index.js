var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  let student = {
    name: "myname",
    surname: "surname"

  }
	res.render('index', { title: 'CDS Resit 1', user:student });
});

module.exports = router;

