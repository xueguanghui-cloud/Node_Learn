/** @format */

const fs = require('fs');

// 对文件夹进行重命名
fs.rename('../codexghPromise', '../learnRename', (err) => {
  console.log('重命名结果:', err);
});

// 对文件进行重命名
fs.rename('../test_file/aaa.txt', '../test_file/aaa_.txt', (err) => {
  console.log('重命名结果:', err);
});
