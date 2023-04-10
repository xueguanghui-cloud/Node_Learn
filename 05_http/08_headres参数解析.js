const http = require('http')

// 创建http对应的服务器
const server = http.createServer((request, response)=>{

  console.log(request.headers);
  
  response.end('查看headers信息')
})

// 开启对应的服务器，并且告知需要监听的端口
// 监听端口时，监听 1024 - 65535 之间的端口
server.listen(3000, () => {
  console.log('服务器已启动：http:127.0.0.1:3000');
})