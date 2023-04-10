/** @format */

const fs = require('fs');

// 通过流读取文件:
const readStream = fs.createReadStream('./aaa.txt', {
  start: 8, // 开始位置
  end: 13, // 结束位置(包含结束位置)
  highWaterMark: 3 // 每次读取大小,分多次读取
});

readStream.on('data', (data) => {
  console.log(data.toString());
  readStream.pause(); // 暂停读取
  setTimeout(() => {
    readStream.resume(); // 恢复读取
  }, 2000);
});
