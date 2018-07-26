//mysql
const connection = require('../tools/db_config');
//导入m_user.js模型
const M_user = require('../models/m_user');



//渲染用户登录的方法
exports.showSignin = (req, res) => {
  res.render('signin.html');
}
//处理登录表单请求
exports.handleSignin = (req, res) => {
  const body = req.body;
  M_user.checkEmail(body.email, (err, results) => {
    if (err) {
      return res.send({
        code: 500,
        message: err.message
      });
    }

    if (!results[0]) {
      return res.send({
        code: 1,
        message: '邮箱不存在!'
      });
    }

    if (results[0].password !== body.password) {
      return res.send({
        code: 2,
        message: '密码错误!'
      });
    }

    req.session.user = results[0];

    res.send({
      code: 200,
      message: '可以登录了'
    });
  });
};
