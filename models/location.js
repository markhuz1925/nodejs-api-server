var db = require('../dbconn');

var location = {
	getStates:  function(callback) {
		return db.query("select distinct concat(case when state = '' then 'Unknown' else state end, ', ', case when city = '' then 'Unknown' else city end) as state from hospital order by state", callback);
    },
    getCitiesByState: function(callback) {
        return db.query("select distinct case when city = '' then 'Unknown' else city end as city from hospital where state = ?  order by city", callback);
    },
    getDoctorsByLocation(location, callback) {
        return db.query("call spFindDoctorByLocation(?)", [location], callback);
    }    
};

module.exports = location;