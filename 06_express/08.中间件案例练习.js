/** @format */

const express = require('express');

//  创建express 服务器
const app = express();

//注册两个实例请求的中间件
// 1. 用户登录请求处理 /login post => username password
app.post('/login', (req, res, next) => {
  // 验证当前用户名和密码是否正确
  // 获取本次请求过程中传递过来的json数据
  let isLogin = false;
  req.on('data', (data) => {
    const dataStr = data.toString();
    const dataInfo = JSON.parse(dataStr);
    if (dataInfo.username === 'codexgh' && dataInfo.password === '123456') {
      isLogin = true;
    } else {
      isLogin = false;
    }
  });
  req.on('end', () => {
    if (isLogin) {
      res.end('登录成功，欢迎回来');
    } else {
      res.end('登录失败，账号或密码错误');
    }
  });
});

// 2. 注册用户的请求处理 /register post => username password
app.post('/register', (req, res, next) => {
  // 获取本次请求过程中传递过来的json数据
  let isRegister = false;
  req.on('data', (data) => {
    const dataStr = data.toString();
    const dataInfo = JSON.parse(dataStr);
    // 查询数据库中该用户是否已经存在
    isRegister = true;
  });
  req.on('end', () => {
    if (isRegister) {
      res.end('注册成功，开启旅程~');
    } else {
      res.end('注册失败，你输入的账号已经被注册');
    }
  });
});

//  启动服务器,并且监听端口
app.listen(3000, () => {
  console.log('express 服务器启动成功');
});
