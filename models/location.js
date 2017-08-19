var db = require('../dbconn');

var location = {
	getStates:  function(callback) {
		return db.query("select distinct case when state = '' then 'Unknown' else state end as state from hospital order by state", callback);
    },
    getCitiesByState: function(callback) {
        return db.query("select distinct case when city = '' then 'Unknown' else city end as city from hospital where state = ?  order by city", callback);
    }
};

module.exports = location;