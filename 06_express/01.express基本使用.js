 const express = require('express')

//  创建express 服务器
 const app = express()

// 客户端访问url: '/login 和 /home
app.post('/login', (req, res) => {
    // 处理login请求
    res.end('登录成功,欢迎回来')
})


app.get('/home', (req, res) => {
  res.end('轮播图数据')  
})

//  启动服务器,并且监听端口
app.listen(3000, () => {
  console.log("express 服务器启动成功");
})