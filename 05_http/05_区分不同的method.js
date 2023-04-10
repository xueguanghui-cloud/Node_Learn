const http = require('http')

// 创建http对应的服务器
const server = http.createServer((request, response)=>{
  // request 对象包含本次客户端请求的所有信息

  const url = request.url
  const method = request.method

  if(url === '/login' && method === 'POST'){
    response.end('登录成功~')
  }else if(url === '/product'){
    response.end('商品列表~')
  }else if(url === '/lyric'){
    response.end('歌词数据')
  }else {
    response.end('错误的请求方式')
  }
})

// 开启对应的服务器，并且告知需要监听的端口
// 监听端口时，监听 1024 - 65535 之间的端口
server.listen(3000, () => {
  console.log('服务器已启动：http:127.0.0.1:3000');
})