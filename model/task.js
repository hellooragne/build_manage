
var connection = require('./db.js');

sprintf = require('sprintf').sprintf;


var taskm = {
	task_name: "taskm",

	gettask: function(get_cb) {
		connection.query('SELECT * from task', function(err, rows, fields) {
			if (err) throw err;

			get_cb(rows);
			//console.log('The solution is: ', rows[0].name, rows[0].content);
		});
	},

	inserttask: function(n, content, cb) {

		connection.query('INSERT INTO task SET ?', {name: n, content: content}, function(err, result) {
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
		var sql = "CREATE TABLE IF NOT EXISTS `task` (id int auto_increment primary key not null, project_id int, name varchar(200), start datetime  not null, end datetime  not null, content varchar(1000))";
		connection.query(sql, function(err, rows, fields) {
			if (err) throw err;
		});
	}

};

module.exports = taskm;
