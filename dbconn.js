var mysql = require('mysql');
var conn = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'filipinokliniko'
});

module.exports = conn;