var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '123456',
  connectTimeout : '200',
  database: 'build'
});

connection.connect();

sprintf = require('sprintf').sprintf;


var taskm = {
	task_name: "taskm",

	getproject: function() {
		connection.query('SELECT * from project', function(err, rows, fields) {
			if (err) throw err;

			console.log('The solution is: ', rows[0].name, rows[0].content);
		});
	},

	insertproject: function(n, content) {

		connection.query('INSERT INTO project SET ?', {name: n, content: content}, function(err, result) {
			  if (err) throw err;

			    console.log(result.insertId);
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

			console.log('The solution is: ', rows);
		});
	}

};

module.exports = taskm;
