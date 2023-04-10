/** @format */
const fs = require('fs');
const express = require('express');
const morgan = require('morgan');

//  创建express 服务器
const app = express();

// 应用第三方中间件
const writeStream = fs.createWriteStream('./log/access.log', { flags: 'a+' });
app.use(morgan('combined', { stream: writeStream }));

// 直接使用 express 提供给我们的中间件，更加简洁
app.use(express.json()); // 解析客户端传递过来的json数据
// 针对 application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//注册两个实例请求的中间件
// 1. 用户登录请求处理 /login post => username password
app.post('/login', (req, res, next) => {
  const isLogin =
    req.body.username === 'codexgh' && req.body.password === '123456';
  if (isLogin) {
    res.end('登录成功，欢迎回来');
  } else {
    res.end('登录失败，账号或密码错误');
  }
});

//  启动服务器,并且监听端口
app.listen(3000, () => {
  console.log('express 服务器启动成功');
});
