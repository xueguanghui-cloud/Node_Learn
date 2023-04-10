/** @format */

const Koa = require('koa');
const KoaRouter = require('@koa/router');
const multer = require('@koa/multer');

// 创建app对象
const app = new Koa();
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

// 创建路由对象
const uploadRouter = new KoaRouter({ prefix: '/uploads' });

// 单文件上传
uploadRouter.post('/avatar', upload.single('avatar'), (ctx, next) => {
  console.log(ctx.request.file);
  ctx.body = '文件上传成功';
});

// 多文件上传
uploadRouter.post('/photos', upload.array('photos'), (ctx, next) => {
  console.log(ctx.request.files);
  ctx.body = '文件上传成功';
});

// 将路由器绑定到app对象上面
app.use(uploadRouter.routes()).use(uploadRouter.allowedMethods());

// 启动服务器
app.listen(3000, () => {
  console.log('koa 服务器启动成功');
});
