const http = require('http')
const url= require('url')
const qs = require('queryString')

// 创建http对应的服务器
const server = http.createServer((request, response)=>{
  // request 对象包含本次客户端请求的所有信息
  const urlString = request.url

  // 1.1 解析url
  const urlInfo = url.parse(urlString)
  console.log(urlInfo .query, urlInfo .pathname); // offset=100&size=10 /list
  
  //1.2 解析query: offset=100&size=10
  const queryString = urlInfo.query
  // const queryInfo = qs.parse(queryString)
  const queryInfo = new URLSearchParams(queryString)  // URLSearchParams { 'offset' => '100', 'size' => '10' }
  console.log(queryInfo.get('offset'), queryInfo.get('size')); // 100 10

  // response 对象用于给客户端返回结果
  response.end('Hello World')
})

// 开启对应的服务器，并且告知需要监听的端口
// 监听端口时，监听 1024 - 65535 之间的端口
server.listen(3000, () => {
  console.log('服务器已启动：http:127.0.0.1:3000');
})