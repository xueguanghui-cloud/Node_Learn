/** @format */
const express = require('express');
const multer = require('multer');

//  创建express 服务器
const app = express();

// 直接使用 express 提供给我们的中间件，更加简洁
app.use(express.json()); // 解析客户端传递过来的json数据
// 针对 application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const formData = multer();

// 解析所有form-data请求 不推荐
app.use(formData.any());

// 解析单个 form-data 请求
app.post('/login', formData.any(), (req, res, next) => {
  console.log(req.body);
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
