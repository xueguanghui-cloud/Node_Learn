/** @format */

const Koa = require('koa');

// 创建app对象
const app = new Koa();

//注册中间
// koa 中间件有两个参数：ctx和next
app.use((ctx, next) => {
  console.log('匹配到koa中间件');
  ctx.body = '返回结果';
});

// 启动服务器
app.listen(3000, () => {
  console.log('koa 服务器启动成功');
});
