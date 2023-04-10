const http = require('http')

// 创建http对应的服务器
const server = http.createServer((request, response)=>{

  // 设置header信息：数据的类型以及数据的编码格式：
  // 1, 单独设置某一个header
  // response.setHeader("Content-Type", "application/json;chartset=utf8;")
  
  // 2. 和 http status code 一起设置
  response.writeHead(200, {
    "Content-Type": "application/json;chartset=utf8;"
  })

  const list = [
    {name: 'codexgh', age: 20},
    {name: 'stephen', age: 30}
  ]

  response.end(JSON.stringify(list))

})

// 开启对应的服务器，并且告知需要监听的端口
// 监听端口时，监听 1024 - 65535 之间的端口
server.listen(3000, () => {
  console.log('服务器已启动：http:127.0.0.1:3000');
})