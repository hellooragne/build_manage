var connection = require('./db.js');

sprintf = require('sprintf').sprintf;

var taskm = {
	task_name: "taskm",

	gettask: function(get_cb) {
		connection.query('SELECT * from task', function(err, rows, fields) {
			if (err) throw err;

			get_cb(rows);
		});
	},

	inserttask: function(sql, cb) {
		connection.query('INSERT INTO task SET ?', sql, function(err, result) {
			  if (err) throw err;

			  cb();
		});
	},

	deltask: function(id) {
		var sql = sprintf("delete from task where id = %s", id);
		connection.query(sql, function(err, result) {
			  if (err) throw err;

			    console.log(result);
		});
	},

	createtask: function() {
		var sql = "CREATE TABLE IF NOT EXISTS `task` (id int auto_increment primary key not null, project_id int, name varchar(200), people varchar(200), start datetime  not null, end datetime  not null, content varchar(1000))";
		connection.query(sql, function(err, rows, fields) {
			if (err) throw err;
		});
	}

};

module.exports = taskm;
