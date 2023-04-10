/** @format */

const express = require('express');

//  创建express 服务器
const app = express();


app.get('/home/list', (req, res) => {
  // offset size
  const queryInfo = req.query;
  console.log(queryInfo);
  // 处理login请求
  res.end('dataList 数据');
});

app.get('/users/:id', (req, res) => {
  // offset size
  const userID = req.params.id;
  console.log(userID);
  // 处理login请求
  res.end(`获取到 ${userID}`);
});

//  启动服务器,并且监听端口
app.listen(3000, () => {
  console.log('express 服务器启动成功');
});
