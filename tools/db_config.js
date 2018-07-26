//配置mysql
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'maxin0608',
  database : 'bbs'
});

// connection.connect();

module.exports = connection;
