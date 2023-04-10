/** @format */

const express = require('express');

//  创建express 服务器
const app = express();

// 注册多个中间件
app.post(
  '/home',
  (req, res, next) => {
    console.log('match /home post middleware 01');
    res.write('match /home post middleware 01 \r\n');
    next();
  },
  (req, res, next) => {
    console.log('match /home post middleware 02');
    res.write('match /home post middleware 02 \r\n');
    next();
  },
  (req, res, next) => {
    console.log('match /home post middleware 03');
    res.write('match /home post middleware 03 \r\n');
    res.end('获取完成 /home');
  }
);

//  启动服务器,并且监听端口
app.listen(3000, () => {
  console.log('express 服务器启动成功');
});
