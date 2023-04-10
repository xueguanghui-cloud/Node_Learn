/** @format */

const express = require('express');

//  创建express 服务器
const app = express();

// 总结: 当express接收到客户端发送的网络请求时,在所有的中间件中开始匹配
// 当匹配到第一个符合要求的中间件时,那么就会执行这个中间件;
// 后续的中间件后续是否会执行呢? 取决于上一个中间件最后是否调用 next() 方法

// 通过 use 方法注册的中间件是最普通的/简单的中间件
// 通过 use 方法注册的中间件,无论是什么请求方式都可以匹配
app.use((req, res, next) => {
  console.log('normal middleware 01');
  next();
});

app.use((req, res, next) => {
  console.log('normal middleware 02');
});

app.use((req, res, next) => {
  console.log('normal middleware 03');
});

//  启动服务器,并且监听端口
app.listen(3000, () => {
  console.log('express 服务器启动成功');
});
