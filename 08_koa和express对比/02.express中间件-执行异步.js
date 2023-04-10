/** @format */

const express = require('express');

const app = express();

let message = '';

app.use(async (req, res, next) => {
  console.log('express middleware 01');
  message += 'aaa';
  await next();
  res.json('express result1' + message);
});
app.use(async (req, res, next) => {
  console.log('express middleware 02');
  message += 'bbbb';
  await next();
});
app.use(async (req, res, next) => {
  console.log('express middleware 03');
  const result = await axios.get('http://123.207.32.32:8000/home/multidata');
  message += 'ccc: ' + result.data.data.banner.list[0].title;
});

app.listen(3000, () => console.log('express服务器开启'));
