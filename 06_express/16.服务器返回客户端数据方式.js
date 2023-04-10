/** @format */

const express = require('express');

//  创建express 服务器
const app = express();

app.post('/login', (req, res, next) => {
  // 1, res.end 方式
  // res.end('登录成功');

  // 2，res.json 方法
  /*  res.json({
    code: 0,
    message: '登录成功',
    list: [
      { name: 'iphone', price: 111 },
      { name: 'huawei', price: 111 }
    ]
  }); */

  // res.status 方法
  res.status(201);
  res.json({
    code: 0,
    message: '登录成功',
    list: [
      { name: 'iphone', price: 111 },
      { name: 'huawei', price: 111 }
    ]
  });
});

//  启动服务器,并且监听端口
app.listen(3000, () => {
  console.log('express 服务器启动成功');
});
