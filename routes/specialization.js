var express = require('express');
var router = express.Router();
var specialization = require('../models/specialization');

router.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

router.get('/:id?', function(req, res, next) {
	if(req.params.id) {
		specialization.getSpecialization(req.params.id, function(err,rows) {
			if(err){
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	} else {
		specialization.getSpecialization(function(err, rows) {
			if(err) {
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	}
});

router.get('/:id?/doctors', function(req, res, next) {
	if(req.params.id) {
		specialization.getDoctorsBySpecialization(req.params.id, function(err,rows) {
			if(err){
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	}
});


module.exports = router;