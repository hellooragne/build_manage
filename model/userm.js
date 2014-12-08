var connection = require('./db.js');
sprintf = require('sprintf').sprintf;

var userm = {
	checkUser: function(p, get_cb) {
		var sql = sprintf("select from user where name = %s", p.name);
		connection.query(sql, function(err, rows, fields) {
			if (err) throw err;

			if (rows[0].password == p.password) {
				get_cb('true');
			} else {
				get_cb('false');
			}

			//console.log('The solution is: ', rows[0].name, rows[0].content);
		});
	},

	insertUser: function(p, get_cb) {
		connection.query('INSERT INTO user SET ?', {name: p.name, password: p.password, role: p.role}, function(err, result) {
			  if (err) throw err;

			  cb();
		});
	},


	createUser: function() {
		var sql = "CREATE TABLE IF NOT EXISTS `user` (id int auto_increment primary key not null, name varchar(200), password varchar(200), createTime datetime  not null, role int)";
		connection.query(sql, function(err, rows, fields) {
			if (err) throw err;
		});
	}
};



module.exports = userm;
