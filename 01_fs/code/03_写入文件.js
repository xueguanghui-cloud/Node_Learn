/** @format */
const fs = require('fs');

const writeContent = '我是要写入的内容';
const filePath = '../test_file/writeFileTest.txt';

// 1. 同步写入
try {
  fs.writeFileSync(filePath, writeContent, { encoding: 'utf-8', flag: 'a' });
  console.log('写入文件成功');
} catch (err) {
  console.log('写入文件失败:', err);
}

// 2. 异步写入: 回调方式
fs.writeFile(
  filePath,
  writeContent,
  { encoding: 'utf-8', flag: 'a' },
  (err) => {
    if (err) {
      console.log('写入文件失败:', err);
    } else {
      console.log('写入文件成功');
    }
  }
);

// 3. 异步写入: Promise
const writeFilePromise = fs.promises.writeFile(filePath, writeContent, {
  encoding: 'utf-8',
  flag: 'a'
});
writeFilePromise
  .then(() => console.log('写入文件成功'))
  .catch((err) => console.log('写入文件失败:', err));
