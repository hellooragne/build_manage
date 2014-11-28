var connection = require('./db.js');
sprintf = require('sprintf').sprintf;

var projectm = {
	project_name: "projectm",

	getproject: function(get_cb) {
		connection.query('SELECT * from project', function(err, rows, fields) {
			if (err) throw err;

			get_cb(rows);
			//console.log('The solution is: ', rows[0].name, rows[0].content);
		});
	},

	insertproject: function(n, content, cb) {

		connection.query('INSERT INTO project SET ?', {name: n, content: content}, function(err, result) {
			  if (err) throw err;

			  cb();
		});
	},

	delproject: function(id) {
		var sql = sprintf("delete from project where id = %s", id);
		connection.query(sql, function(err, result) {
			  if (err) throw err;

			    console.log(result);
		});
	},

	createproject: function() {
		var sql = "CREATE TABLE IF NOT EXISTS `project` (id int auto_increment primary key not null, name varchar(200), start datetime  not null, end datetime  not null, content varchar(1000))";
		connection.query(sql, function(err, rows, fields) {
			if (err) throw err;
		});
	}
};

module.exports = projectm;
