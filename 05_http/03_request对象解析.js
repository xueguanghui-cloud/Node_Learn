const http = require('http')

// 创建http对应的服务器
const server = http.createServer((request, response)=>{
  // request 对象包含本次客户端请求的所有信息
  console.log(request.url) // 请求url
  console.log(request.method) // 请求方式
  console.log(request.headers) // 请求头


  // response 对象用于给客户端返回结果
  response.end('Hello World')
})

// 开启对应的服务器，并且告知需要监听的端口
// 监听端口时，监听 1024 - 65535 之间的端口
server.listen(3000, () => {
  console.log('服务器已启动：http://127.0.0.1:3000');
})