//mysql
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'maxin0608',
  database : 'bbs'
});

connection.connect();

//渲染用户登录的方法
exports.showSignin = (req, res) => {
  res.render('signin.html');
}
//处理登录表单请求
exports.handleSignin = (req, res) => {
  const body = req.body;
  const sqlstr = 'SELECT * FROM `users` WHERE `email` =?';
  connection.query(sqlstr,body.email,(err, results) => {
    if(err) {
      return res.send({
        code:500,
        message:err.message
      });
    }
    if(!results[0]) {
      return res.send({
        code:1,
        message:'邮箱不存在!'
      });
    }
    const sqlstr = 'SELECT * FROM `users` WHERE `email` =? AND `password`=?';
    connection.query(sqlstr,[body.email,body.password],(err, results) => {
      if(err) {
        return res.send({
          code:500,
          message:err.message
        });
      }
      if(!results[0]) {
        return res.send({
          code:2,
          message:'密码错误!'
        });
      }
      res.send({
        code:200,
        message:'可以登录了'
      });
    });
  });
}
