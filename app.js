const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');


const app = express();
//配置模板引擎
app.engine('html', require('express-art-template'));
//配置静态资源
app.use('/public',express.static('./public'));
app.use('/node_modules',express.static('./node_modules'));
//配置body-parser
app.use(bodyParser.urlencoded({ extended: false }));

//配置路由
app.use(router);

app.listen(12345, () => {
  console.log('run----------------')
})
