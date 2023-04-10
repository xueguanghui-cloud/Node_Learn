/** @format */

const express = require('express');

//  创建express 服务器
const app = express();

// 注册路径方法匹配中间件
app.post('/home', (req, res, next) => {
  console.log('post home middleware');
  res.end('post home middleware');
});

// 定义一个路径，并使用中间件
app.get('/list', (req, res, next) => {
  console.log('get list middleware');
  res.end('get list middleware');
});

//  启动服务器,并且监听端口
app.listen(3000, () => {
  console.log('express 服务器启动成功');
});
