var express = require('express');
var router = express.Router();
var article = require('../models/article');

router.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

router.get('', function(req, res, next) {
	if(req.query.url) {
		article.getContent(req.query.url, function(err,content) {
			if(err){
				res.json(err);
			} else {
				res.json(content);
			}
        });
    }
    else {
        res.json('missing parameter!');
    }
});

module.exports = router;