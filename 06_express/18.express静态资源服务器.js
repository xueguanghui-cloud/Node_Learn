/** @format */

const express = require('express');
//  创建express 服务器
const app = express();

// 内置的中间件，直接将一个文件夹作为静态服务器
app.use(express.static('./uploads'));

//  启动服务器,并且监听端口
app.listen(3000, () => {
  console.log('express 服务器启动成功');
});
