var connection = require('./db.js');
sprintf = require('sprintf').sprintf;

var safetym = {
	safety_name: "safetym",

	getsafety: function(get_cb) {
		connection.query('SELECT * from safety', function(err, rows, fields) {
			if (err) throw err;

			get_cb(rows);
			//console.log('The solution is: ', rows[0].name, rows[0].content);
		});
	},

	insertsafety: function(n, content, cb) {
		connection.query('INSERT INTO safety SET ?', {name: n, content: content}, function(err, result) {
			  if (err) throw err;

			  cb();
		});
	},

	delsafety: function(id) {
		var sql = sprintf("delete from safety where id = %s", id);
		connection.query(sql, function(err, result) {
			  if (err) throw err;

			    console.log(result);
		});
	},

	createsafety: function() {
		var sql = "CREATE TABLE IF NOT EXISTS `safety` (id int auto_increment primary key not null, name varchar(200), start datetime  not null, end datetime  not null, content varchar(1000))";
		connection.query(sql, function(err, rows, fields) {
			if (err) throw err;
		});
	}
};

module.exports = safetym;
