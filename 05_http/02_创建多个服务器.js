const http = require('http')

// 创建http对应的服务器
const server1 = http.createServer((request, response)=>{
  response.end('server1: Hello World')
})
const server2 = http.createServer((request, response)=>{
  response.end('server2: Hello World')
})
const server3 = http.createServer((request, response)=>{
  response.end('server3: Hello World')
})

// 开启对应的服务器，并且告知需要监听的端口
// 监听端口时，监听 1024 - 65535 之间的端口
server1.listen(3000, () => {
  console.log('服务器已启动：http:127.0.0.1:3000');
})
server2.listen(3001, () => {
  console.log('服务器已启动：http:127.0.0.1:3001');
})
server3.listen(3002, () => {
  console.log('服务器已启动：http:127.0.0.1:3002');
})