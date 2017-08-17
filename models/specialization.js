var db = require('../dbconn');

var specialization = {
	getSpecialization :  function(id, callback) {
		return db.query("select distinct specializationid as id, Specialization from doctor_specialization where specializationid = ? order by specialization asc", [id], callback);
    },
    getSpecialization: function(callback) {
        return db.query("select distinct specializationid as id, Specialization from doctor_specialization order by specialization asc", callback);
    },
    getDoctorsBySpecialization: function(id, callback) {
        return db.query("select d.FullName, Specialization as Description, ifnull(d.PhoneNumberOne, '+63 916 432 0966') as 'ContactNo' from doctor_specialization ds inner join doctor d on ds.DoctorId=d.id  where SpecializationId = ? order by FullName asc", [id], callback);
    }

};

module.exports = specialization;