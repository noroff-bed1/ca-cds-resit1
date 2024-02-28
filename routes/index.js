var express = require('express');
var router = express.Router();
var os = require('os');

/* GET home page. */
router.get('/', (req, res, next) => {
	let student = {
		name: 'myname',
		surname: 'surname',
	};
	res.render('index', { title: 'CDS Resit 1', user: student });
});

router.get('/status', (req, res, next) => {
	res.status(200).json({ hostname: os.hostname(), homedir: os.homedir(), network:os.networkInterfaces() });
});

module.exports = router;

