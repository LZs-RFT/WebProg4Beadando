var express = require('express');
var router = express.Router();

var ellenorzoMW = require('../middlewares/ellenorzo');
var feltoltoMW = require('../middlewares/feltolto');

var adatok = {}

router.get('/', function(req, res)
{
	res.render('pages/home');
	//res.render('');
	//res.send('Hello world');
});

module.exports = router;