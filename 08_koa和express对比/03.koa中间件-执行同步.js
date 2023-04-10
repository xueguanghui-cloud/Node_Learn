/** @format */

const Koa = require('koa');

const app = new Koa();

app.use((ctx, next) => {
  console.log('Koa middleware 01');

  ctx.msg = 'aaa';

  next();

  // 返回结果
  ctx.body = ctx.msg; // aaabbbccc
});

app.use((ctx, next) => {
  console.log('Koa middleware 02');
  ctx.msg += 'bbb';
  next();
});

app.use((ctx, next) => {
  console.log('Koa middleware 03');
  ctx.msg += 'ccc';
  ctx.body = 'hhhhh';
});

app.listen(3000, () => console.log('express服务器开启'));
