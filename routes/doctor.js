var express = require('express');
var router = express.Router();
var doctor = require('../models/doctor');

router.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

router.get('/:id?', function(req, res, next) {
	if(req.params.id) {
		doctor.getAllDoctors(req.params.id, function(err,rows) {
			if(err){
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	} else {
		doctor.getAllDoctors(function(err, rows) {
			if(err) {
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	}
});

module.exports = router;