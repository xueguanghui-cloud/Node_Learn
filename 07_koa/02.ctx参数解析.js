/** @format */

const Koa = require('koa');

// 创建app对象
const app = new Koa();

//注册中间
// koa 中间件有两个参数：ctx和next
app.use((ctx, next) => {
  // 请求对象
  console.log(ctx.request); // 请求对象 koa 封装的请求对象
  console.log(ctx.req); // 请求对象 Node 封装的请求对象

  // 响应对象
  console.log(ctx.response); // 响应对象 koa 封装的响应对象
  console.log(ctx.res); // 响应对象 Node 封装的响应对象

  // 其他属性
  console.log(ctx.query);
});

// 启动服务器
app.listen(3000, () => {
  console.log('koa 服务器启动成功');
});
