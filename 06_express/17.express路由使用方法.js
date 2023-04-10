/** @format */

const express = require('express');
const userRouter = require('./router/userRouter.js');
//  创建express 服务器
const app = express();

// 将用户接口直接定义在 app 中
// app.get('/users', (req, res, next) => {});
// app.get('/users/:id', (req, res, next) => {});
// app.post('/users', (req, res, next) => {});
// app.delete('/users/:id', (req, res, next) => {});
// app.patch('/users/:id', (req, res, next) => {});

// 将用户接口定义在单独的路由对象中

// 让路由生效
app.use('/users', userRouter);

//  启动服务器,并且监听端口
app.listen(3000, () => {
  console.log('express 服务器启动成功');
});
