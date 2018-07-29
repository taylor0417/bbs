const connection = require('../tools/db_config');

exports.findAllTopic = (callback) => {
  const sqlstr = 'SELECT * FROM `topics`';
  connection.query(sqlstr,(err, results) => {
    if(err) {
      return callback(err);
    }
    callback(null, results);
  });
}
