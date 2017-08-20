var express = require('express');
var router = express.Router();
var hospital = require('../models/hospital');

router.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

router.get('/doctor/:doctorId?', function(req, res, next) {
	if(req.params.doctorId) {
		hospital.getByDoctorId(req.params.doctorId, function(err,rows) {
			if(err){
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	}
});

module.exports = router;