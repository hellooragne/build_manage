var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '123456',
  connectTimeout : '200',
  database: 'build'
});

connection.connect();


module.exports = connection;
