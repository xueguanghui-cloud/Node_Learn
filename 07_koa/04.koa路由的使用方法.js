/** @format */

const Koa = require('koa');
const KoaRouter = require('@koa/router');

// 创建app对象
const app = new Koa();

// 创建路由对象
const userRouter = new KoaRouter({ prefix: '/users' });

userRouter.get('/', (ctx, next) => {
  ctx.body = '获取成功';
});
userRouter.get('/:id', (ctx, next) => {
  ctx.body = '查询成功';
});
userRouter.post('/', (ctx, next) => {
  ctx.body = '添加成功';
});

// 将路由器绑定到app对象上面
app.use(userRouter.routes()).use(userRouter.allowedMethods());

// 启动服务器
app.listen(3000, () => {
  console.log('koa 服务器启动成功');
});
