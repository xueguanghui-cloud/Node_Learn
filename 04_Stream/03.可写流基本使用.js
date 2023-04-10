/** @format */

const fs = require('fs');

const writeStream = fs.createWriteStream('./bbb.txt', {
  flags: 'a+'
});

writeStream.on('open', (fd) => {
  console.log('文件被打开', fd);
});

// 写入数据
writeStream.write('This is the first line.', (err) => {
  if (err) {
    console.log('写入失败', err);
    return;
  }
  console.log('写入成功');

  // 写入完成时,需要手动调用close方法
  // writeStream.close();

  // end方法: 将最后的内容写入文件中,并且关闭文件
  writeStream.end();
});

// 写入完成
writeStream.on('finish', () => {
  console.log('文件写入完成');
});

writeStream.on('close', () => {
  console.log('关闭文件');
});
