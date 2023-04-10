/** @format */

const fs = require('fs');

// 通过流读取文件:
const readStream = fs.createReadStream('./aaa.txt', {
  start: 8, // 开始位置
  end: 30, // 结束位置(包含结束位置)
  highWaterMark: 3 // 每次读取大小,分多次读取
});

readStream.on('data', (data) => {
  console.log(data.toString());
});

// 通过流将文件打开
readStream.on('open', (fd) => {
  console.log('通过流将文件打开', fd);
});

// 读取结束
readStream.on('end', () => {
  console.log('已经读取到end位置了');
});

// 文件读取结束,并关闭文件
readStream.on('close', () => {
  console.log('文件读取结束,并关闭文件');
});
