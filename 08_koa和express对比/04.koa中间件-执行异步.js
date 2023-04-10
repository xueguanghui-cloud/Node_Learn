/** @format */

const Koa = require('koa');
const axios = require('axios');

const app = new Koa();

app.use(async (ctx, next) => {
  console.log('Koa middleware 01');

  ctx.msg = 'aaa';

  await next();

  // 返回结果
  ctx.body = ctx.msg; // aaabbbccc
});

app.use(async (ctx, next) => {
  console.log('Koa middleware 02');
  ctx.msg += 'bbb';
  // 如果执行的下一个中间件是一个异步函数，那么next默认不会等到中间件的结果，就会执行下一步操作
  // 如果我们希望等待下一个异步函数的执行结果，那么需要在next函数前面加上 await
  await next();
});

app.use(async (ctx, next) => {
  console.log('Koa middleware 03');

  // 网络请求
  const res = await axios.get('http://123.207.32.32:8000/home/multidata');
  ctx.msg += 'ccc: ' + res.data.data.banner.list[0].title;
});

app.listen(3000, () => console.log('express服务器开启'));
