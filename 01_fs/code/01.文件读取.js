/** @format */
const fs = require('fs');
// 1. 同步读取
try {
  const res1 = fs.readFileSync('../test_file/aaa.txt', { encoding: 'utf-8' });
  console.log('同步读取结果:', res1);
} catch (err) {
  console.log('读取文件出错:', err);
}

// 2. 异步读取，回调函数
fs.readFile('../test_file/aaa.txt', 'utf-8', (err, res) => {
  if (err) {
    return console.log('读取文件出错:', err);
  }
  console.log('回调函数读取结果:', res);
});
// 3. 异步读取,Promise
const readFilePromise = fs.promises.readFile('../test_file/aaa.txt', 'utf-8');
readFilePromise
  .then((res) => {
    console.log('Promise读取结果:', res);
  })
  .catch((err) => {
    console.log('读取文件出错:', err);
  });
