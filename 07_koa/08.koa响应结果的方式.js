/** @format */

const Koa = require('koa');
const KoaRouter = require('@koa/router');
const fs = require('fs');

// 创建app对象
const app = new Koa();

// 创建路由对象
const userRouter = new KoaRouter({ prefix: '/users' });

userRouter.get('/', (ctx, next) => {
  // ● string:字符串数据
  // ctx.body = '获取成功';
  // ● Buffer:Buffer数据
  // ctx.body = Buffer.from('get data success');
  // ● Stream:流数据
  // const readStream = fs.createReadStream(
  //   './uploads/1681023942652_20215151815452.png'
  // );
  // ctx.type = 'image/png';
  // ctx.body = readStream;
  // ● Object/Array:对象或者数组
  // ctx.body = {
  //   code: 0,
  //   list: [{ id: 1, username: 'stephen' }]
  // };
  // ● null：不输出任何内容
  // ctx.body = null;
});

// 将路由器绑定到app对象上面
app.use(userRouter.routes()).use(userRouter.allowedMethods());

// 启动服务器
app.listen(3000, () => {
  console.log('koa 服务器启动成功');
});
