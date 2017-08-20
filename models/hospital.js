var db = require('../dbconn');

var hospital = {
	getById :  function(id, callback) {
		return db.query("select * from hospital where id = ?", [id], callback);
    },
    getByDoctorId: function(doctorid, callback) {
        return db.query("select description as 'Name', ifnull(ContactNo, 'Not Available') as 'ContactNo' from hospital where id in(select hospitalId from doctor_hospital where doctorid = ?)", doctorid , callback);
    }
};

module.exports = hospital;