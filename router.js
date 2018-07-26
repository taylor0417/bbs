const express = require('express');
const user = require('./controllers/user');

const router = express.Router();

//渲染登录页面的请求
router.get('/signin', user.showSignin);
      .post('/handleSignin', user.handleSignin);


module.exports = router;
