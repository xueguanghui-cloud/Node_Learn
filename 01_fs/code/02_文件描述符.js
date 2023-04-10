/** @format */

const fs = require('fs');

// 打开一个文件
fs.open('../test_file/bbb.txt', (err, fd) => {
  if (err) {
    console.log('打开文件失败！');
    return;
  }
  console.log('文件描述符：' + fd);

  // 根据文件描述符读取文件
  try {
    const res = fs.readFileSync(fd, { encoding: 'utf-8' });
    console.log('根据文件描述符读取文件结果: ', res);
  } catch (err) {
    console.log('读取文件失败:', err);
  }

  // 读取到文件信息
  try {
    const fileInfo = fs.fstatSync(fd);
    console.log('文件信息:', fileInfo);
  } catch (err) {
    console.log('读取文件信息失败！');
  }

  // 手动关闭文件
  fs.close(fd);
});
