var mysql = require('mysql');
var conn = mysql.createPool({
	host: '',
	user: '',
	password: '',
	database: ''
});

module.exports = conn;