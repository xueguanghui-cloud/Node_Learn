/** @format */

const express = require('express');
//  创建express 服务器
const app = express();

app.use(express.json());

app.post('/login', (req, res, next) => {
  const { username, password } = req.body;

  // 对用户名和密码进行判断
  if (!username || !password) {
    next(-1001);
  } else if (username !== 'codexgh' || password !== '123456') {
    next(-1002);
  } else {
    res.json({
      code: 0,
      message: '登录成功',
      token: Date.now()
    });
  }
});

// 错误处理中间件
app.use((errCode, req, res, next) => {
  let message = '未知的错误信息';

  switch (errCode) {
    case -1001:
      message = '没有输入用户名和密码';
      break;
    case -1002:
      message = '用户名或密码有误';
      break;
  }

  res.json({
    code: errCode,
    message
  });
});

//  启动服务器,并且监听端口
app.listen(3000, () => {
  console.log('express 服务器启动成功');
});
