var express = require('express');
var router = express.Router();
var product = require('../models/product');

router.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

router.get('/:id?', function(req, res, next) {
	if(req.params.id) {
		product.getProductById(req.params.id, function(err,rows) {
			if(err){
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	} else {
		product.getAllProducts(function(err, rows) {
			if(err) {
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	}
});

router.post('/addProduct', function(req, res, next) {
	product.addProduct(req.body, function(err, count) {
		if(err){
			res.json(err);
		} else {
			res.json(req.body);
		}
	});
});

router.post('/:id', function(req, res, next) {
	product.deleteAll(req.body, function(err, count) {
		if(err) {
			res.json(err);
		} else {
			res.json(count);
		}
	});
});

router.delete('/:id', function(res, res, next) {
	product.deleteProduct(req.params.id, function(err, count) {
		if(err) {
			res.json(err);
		} else {
			res.json(count);
		}
	});
});

router.put('/:id', function(req, res, next) {
	product.updateProduct(req.params.id, req.body, function(err, rows) {
		if(err) {
			res.json(err);
		} else {
			res.json(rows);
		}
	});
});

module.exports = router;