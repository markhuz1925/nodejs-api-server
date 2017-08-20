var express = require('express');
var router = express.Router();
var location = require('../models/location');

router.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

router.get('/:id?', function(req, res, next) {
    location.getStates(function(err, rows) {
        if(err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

module.exports = router;