/** @format */

const fs = require('fs');

// 方式一:
fs.readFile('./foo.txt', (err, data) => {
  fs.writeFile('./foo_copy01.txt', data, (error) => {
    if (error) return console.log('写入失败');
    console.log('写入成功');
  });
});

// 方式二:
const readStream1 = fs.createReadStream('./foo.txt');
const writeStream1 = fs.createWriteStream('./foo_copy02.txt');
readStream1.on('data', (data) => {
  writeStream1.write(data);
});

readStream1.on('end', () => {
  writeStream1.end();
});

// 方式三: 在刻度流和科协流之间建立一个管道
const readStream2 = fs.createReadStream('./foo.txt');
const writeStream2 = fs.createWriteStream('./foo_copy03.txt');
readStream2.pipe(writeStream2);
