var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '121.40.198.251',
  user     : 'root',
  password : '123456',
  connectTimeout : '200',
  database: 'build'
});

connection.connect();



var taskm = {
	name: "taskm",

	getproject: function() {
		connection.query('SELECT * from project', function(err, rows, fields) {
			if (err) throw err;

			console.log('The solution is: ', rows[0].pid, rows[0].start, rows[0].end);
		});
	}

	setproject: function() {
		connection.query('insert into project', function(err, rows, fields) {
			if (err) throw err;

			console.log('The solution is: ', rows[0].pid, rows[0].start, rows[0].end);
		});
	}

	delproject: function() {

	}

};

module.exports = taskm;
