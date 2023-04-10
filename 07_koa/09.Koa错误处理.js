/** @format */

const Koa = require('koa');
const KoaRouter = require('@koa/router');

// 创建app对象
const app = new Koa();

// 创建路由对象
const userRouter = new KoaRouter({ prefix: '/users' });

userRouter.get('/', (ctx, next) => {
  const isAuth = false;
  if (isAuth) {
    ctx.body = 'user list data';
  } else {
    ctx.app.emit('error', -1002, ctx);
  }
});

// 将路由器绑定到app对象上面
app.use(userRouter.routes()).use(userRouter.allowedMethods());

// 独立的文件 error_handle.js
app.on('error', (code, ctx) => {
  let errCode = code;
  let message = '';
  switch (errCode) {
    case -1001:
      message = '账号或密码错误';
      break;
    case -1002:
      message = '用户未找到';
      break;
    case -1003:
      message = 'need auth';
      break;
  }
  const body = {
    code: errCode,
    message
  };
  ctx.body = body;
});

// 启动服务器
app.listen(3000, () => {
  console.log('koa 服务器启动成功');
});
