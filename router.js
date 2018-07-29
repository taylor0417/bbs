const express = require('express');
const user = require('./controllers/c_user');
const topic = require('./controllers/c_topic');

const router = express.Router();

//渲染登录页面的请求
router.get('/signin', user.showSignin)
      .post('/handleSignin', user.handleSignin)
      .get('/', topic.showIndex)


module.exports = router;
