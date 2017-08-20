var mysql = require('mysql');
var conn = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: '123456',
	database: 'filipinokliniko'
});

module.exports = conn;