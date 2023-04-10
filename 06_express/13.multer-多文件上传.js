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

// 上传多文件
app.post('/photos', upload.array('photos'), (req, res, next) => {
  console.log(req.files);
  res.end('上传多个文件成功');
});

//  启动服务器,并且监听端口
app.listen(3000, () => {
  console.log('express 服务器启动成功');
});
