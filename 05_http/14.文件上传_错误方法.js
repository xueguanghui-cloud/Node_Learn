const http = require('http')
const fs = require('fs')

// 创建http对应的服务器
const server = http.createServer((request, response)=>{
  
  // 创建writable可写流
  const writeStream = fs.createWriteStream('./foo.png', {
    flags: 'a+'
  })

  // 客户端传递过来的数据是表单数据(请求体)
  request.on('data', (data) => {
    console.log(data);
    writeStream.write(data)
  })

  request.on('end', () => {
    console.log('数据传输完成');
    writeStream.close()
    response.end('文件上传成功');    
  })

})

// 开启对应的服务器，并且告知需要监听的端口
// 监听端口时，监听 1024 - 65535 之间的端口
server.listen(3000, () => {
  console.log('服务器已启动：http:127.0.0.1:3000');
})