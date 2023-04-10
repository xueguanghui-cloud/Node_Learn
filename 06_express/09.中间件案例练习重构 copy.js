/** @format */

const express = require('express');

//  创建express 服务器
const app = express();

// 通过 普通中间件 处理公共逻辑
/* app.use((req, res, next) => {
  if (req.headers['content-type'] == 'application/json') {
    req.on('data', (data) => {
      const jsonInfo = JSON.parse(data.toString());
      req.body = jsonInfo;
    });

    req.on('end', () => {
      next();
    });
  } else {
    next();
  }
}); */

// 直接使用 express 提供给我们的中间件，更加简洁
app.use(express.json());

//注册两个实例请求的中间件
// 1. 用户登录请求处理 /login post => username password
app.post('/login', (req, res, next) => {
  console.log(req.body);
  const isLogin =
    req.body.username === 'codexgh' && req.body.password === '123456';
  if (isLogin) {
    res.end('登录成功，欢迎回来');
  } else {
    res.end('登录失败，账号或密码错误');
  }
});

// 2. 注册用户的请求处理 /register post => username password
app.post('/register', (req, res, next) => {
  const isRegister = true;
  if (isRegister) {
    res.end('注册成功，开启旅程~');
  } else {
    res.end('注册失败，你输入的账号已经被注册');
  }
});

//  启动服务器,并且监听端口
app.listen(3000, () => {
  console.log('express 服务器启动成功');
});
