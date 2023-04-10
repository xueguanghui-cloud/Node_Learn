/** @format */

const fs = require('fs');

// 同步读取
try {
  const res = fs.readdirSync('../codexghSync', { encoding: 'utf-8' });
  console.log('同步读取文件夹内容:', res);
} catch (err) {
  console.log('同步读取文件夹失败', err);
}

// 异步回调
fs.readdir('../codexghSync', { withFileTypes: true }, (err, res) => {
  if (err) {
    console.log('读取文件夹失败', err);
  } else {
    console.log('读取文件夹内容:', res);
  }
});

fs.readdir('../codexghSync', { withFileTypes: true }, (err, res) => {
  if (err) {
    console.log('读取文件夹失败', err);
  } else {
    res.forEach((item) => {
      if (item.isDirectory()) {
        console.log('item是一个文件夹', item);
      } else {
        console.log('item是一个文件', item);
      }
    });
  }
});

// 异步promise
fs.promises
  .readdir('../codexghSync', { encoding: 'utf-8' })
  .then((res) => console.log('读取文件夹内容:', res))
  .catch((err) => console.log('读取文件夹失败', err));
