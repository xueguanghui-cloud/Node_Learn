const http = require('http')

// 创建http对应的服务器
const server = http.createServer((request, response)=>{

  // 方式一：statusCode
  response.statusCode = 201
  
  // 方式二：setHead 响应头
  response.writeHead(201)
  
  response.end('创建用户成功')

})

// 开启对应的服务器，并且告知需要监听的端口
// 监听端口时，监听 1024 - 65535 之间的端口
server.listen(3000, () => {
  console.log('服务器已启动：http:127.0.0.1:3000');
})