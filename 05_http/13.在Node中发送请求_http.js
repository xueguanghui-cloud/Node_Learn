const http = require('http')

// 使用http模块发送 get 请求
http.get('http://127.0.0.1:3000', (res) => {
  // 从可读流中获取数据
  res.on('data', (data) => {
    const dataString = data.toString()
    const dataInfo = JSON.parse(dataString)
    console.log(dataInfo);
  })
})

const res = http.request({
  method: 'POST',
  hostname: '127.0.0.1',
  port: 3000
}, (res)=> {
  res.on('data', (data) => {
    const dataString = data.toString()
    const dataInfo = JSON.parse(dataString)
    console.log(dataInfo);
  })
})

// 必须调用end, 表示写入内容完成
res.end()