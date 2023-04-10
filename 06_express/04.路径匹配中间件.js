/** @format */

const express = require('express');

//  创建express 服务器
const app = express();

// 注册路径匹配中间件
// 路径匹配中间件是不会对请求方式（method）进行限制
app.use('/home', (req, res, next) => {
  console.log('match /home middleware');
  res.end('home');
});

//  启动服务器,并且监听端口
app.listen(3000, () => {
  console.log('express 服务器启动成功');
});
