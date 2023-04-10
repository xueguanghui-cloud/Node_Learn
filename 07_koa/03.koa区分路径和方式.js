/** @format */

const Koa = require('koa');

// 创建app对象
const app = new Koa();

//注册中间
app.use((ctx, next) => {
  // 路径
  console.log(ctx.request.path);
  console.log(ctx.path);

  // 请求行为
  console.log(ctx.request.method);
  console.log(ctx.method);
});

// 启动服务器
app.listen(3000, () => {
  console.log('koa 服务器启动成功');
});
