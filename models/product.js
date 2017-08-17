var db = require('../dbconn');
var product = {
	getAllProducts : function(callback) {
		return db.query("SELECT * FROM products", callback);
	},

	getProductById :  function(id, callback) {
		return db.query("SELECT * FROM products WHERE id = ?",[id], callback);
	},

	addProduct : function(prod, callback) {
		console.log(prod.id);
		return db.query("INSERT INTO products values(?, ?, ?, ?, ?, ?, ?)", [prod[0].product_barcode, prod[0].product_brand, prod[0].product_name, prod[0].product_unit, prod[0].product_price], prod[0].date_created, prod[0].date_updated, callback);
	},

	deleteProduct : function(id, callback) {
		return db.query("DELETE FROM products WHERE id = ?", [id], callback);
	},
	
	updateProduct : function(id, prod, callback) {
		return db.query("UPDATE products SET product_barcode = ?, product_brand = ?, product_name = ?, product_unit = ?, product_price = ?, date_updated = ? WHERE id = ?", [prod.product_barcode, prod.product_brand, prod.product_name, prod.product_unit, prod.product_price, date_updated], callback);
	},

	deleteAll : function(item, callback) {
		var prods = [];
		for(i=0; i<item.length; i++) {
			prods[i] = item[i].id;
		}
		return dn.query("DELETE FROM products WHERE id IN (?)", [prods], callback);
	}
};

module.exports = product;