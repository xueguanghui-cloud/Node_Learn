/** @format */

const fs = require('fs');

// 同步
try {
  fs.mkdirSync('../codexghSync');
  console.log('创建文件夹成功');
} catch (err) {
  console.log('插件文件夹失败:', err);
}

// 异步回调
fs.mkdir('../codexghCallBack', (err) => {
  if (err) {
    console.log('插件文件夹失败:', err);
  } else {
    console.log('创建文件夹成功');
  }
});

// 异步promise
fs.promises
  .mkdir('../codexghPromise')
  .then(() => console.log('创建文件夹成功'))
  .catch((err) => {
    console.log('创建文件夹失败', err);
  });
