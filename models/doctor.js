var db = require('../dbconn');

var doctor = {
	getDoctorById :  function(id, callback) {
		return db.query("select * from doctor where id = ?", [id], callback);
    },
    getAllDoctors: function(callback) {
        return db.query("select d.FullName, ifnull(d.PhoneNumberOne, '+63 916 432 0966') as 'ContactNo', s.Description from doctor d inner join doctor_specialization ds on d.id=ds.DoctorId  inner join specialization s on s.id=ds.specializationid limit 100", callback);
    }
};

module.exports = doctor;