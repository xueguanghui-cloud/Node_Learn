/** @format */
const express = require('express');
const multer = require('multer');
//  创建express 服务器
const app = express();

// 应用第三方中间件
const upload = multer({
  // dest: './uploads'
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '_' + file.originalname);
    }
  })
});

//上传单文件：single方法
app.post('/avatar', upload.single('avatar'), (req, res, next) => {
  console.log(req.file);
  res.end('文件上传成功');
});

//  启动服务器,并且监听端口
app.listen(3000, () => {
  console.log('express 服务器启动成功');
});
