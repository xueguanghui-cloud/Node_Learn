const http = require('http')

// 创建http对应的服务器
const server = http.createServer((request, response)=>{
  // request 对象包含本次客户端请求的所有信息

  // 设置可读流编码
  request.setEncoding('utf-8')

  let isLogin = false

  // request 本质上是一个 可读流
  request.on('data', (data)=> {
    const dataString = data
    const loginInfo = JSON.parse(dataString)
    console.log(loginInfo);
    if(loginInfo.name === 'codexgh' && loginInfo.password === '123456'){
      isLogin = true
    }else{
      isLogin = false
    }
  })

  request.on('end', ()=>{
    if(isLogin) {
      response.end('登录成功，欢迎回来')
    }else{
      response.end('账号或密码错误')
    }
  })
})

// 开启对应的服务器，并且告知需要监听的端口
// 监听端口时，监听 1024 - 65535 之间的端口
server.listen(3000, () => {
  console.log('服务器已启动：http:127.0.0.1:3000');
})