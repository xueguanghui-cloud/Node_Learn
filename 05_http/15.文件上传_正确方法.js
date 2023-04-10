const http = require('http')
const fs = require('fs')

// 创建http对应的服务器
const server = http.createServer((request, response)=>{

  request.setEncoding('binary')

  const boundary = request.headers['content-type'].split('; ')[1].replace('boundary=', '')

  let formData = ''
  // 客户端传递过来的数据是表单数据(请求体)
  request.on('data', (data) => {
    console.log(data);
    formData += data
  })

  request.on('end', () => {
    // 1. 截图 从 image/jpeg 位置开始后面所有的数据
    const imageType = 'image/jpeg'
    const imageTypePosition = formData.indexOf('image/jpeg') + imageType.length
    let imageData = formData.substring(imageTypePosition)

    // 2. imageData 开始位置会有两个空格
    imageData = imageData.replace(/^\s\s*/, '')

    // 3. 替换掉最后的 boundary
    imageData = imageData.substring(0, imageData.indexOf(`--${boundary}--`))

    // 4. 将 imageData存储到文件
    fs.writeFile('./bar.png', imageData, 'binary', () => {
      console.log('文件存储成功');
      console.log('数据传输完成');
      response.end('文件上传成功');
    })

  })

})

// 开启对应的服务器，并且告知需要监听的端口
// 监听端口时，监听 1024 - 65535 之间的端口
server.listen(3000, () => {
  console.log('服务器已启动：http:127.0.0.1:3000');
})