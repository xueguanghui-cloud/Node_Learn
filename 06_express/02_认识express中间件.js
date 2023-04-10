const express = require('express')

//  创建express 服务器
 const app = express()

// 给 express 产的app传入的回调函数,传入的回调函数就称为中间件
// app.post('/login', 回调函数=>中间件)
app.post('/login', (req, res, next) => {

  // 1. 中间件中可以执行任意代码

  // 2，在中间件中修改req,res对象

  // 3. 可以在中间件中结束响应周期
  // res.json({ message: '登录成功', code: 0 })

  // 4. 执行下一个中间件
  console.log('第一个中间件被执行');
  next()
})

app.use((req, res, next)=>{
  console.log('下一个中间件被执行');
})

//  启动服务器,并且监听端口
app.listen(3000, () => {
  console.log("express 服务器启动成功");
})