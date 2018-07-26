

//渲染用户登录的方法
exports.showSignin = (req, res) => {
  res.render('signin.html');
}
//处理登录表单请求
exports.handleSignin = (req, res) => {
  const body = req.body;
}
