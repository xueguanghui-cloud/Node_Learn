/** @format */

const express = require('express');

//  创建express 服务器
const app = express();

// 题目练习

app.use((req, res, next) => {
  console.log('normal middleware 01');
});
app.use((req, res, next) => {
  console.log('normal middleware 02');
});

// path/method
app.get(
  '/home',
  (req, res, next) => {
    console.log('/home get middleware 01');
  },
  (req, res, next) => {
    console.log('/home get middleware 02');
  }
);

app.post('/login', (req, res, next) => {
  console.log('/login get middleware 01');
});

// 普通中间件
app.use((req, res, next) => {
  console.log('normal middleware 03');
});
app.use((req, res, next) => {
  console.log('normal middleware 04');
});

//  启动服务器,并且监听端口
app.listen(3000, () => {
  console.log('express 服务器启动成功');
});
