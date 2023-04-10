/** @format */

const express = require('express');

const app = express();

let message = '';

app.use((req, res, next) => {
  console.log('express middleware 01');
  message += 'aaa';
  next();
  res.json('express result1' + message);
});
app.use((req, res, next) => {
  console.log('express middleware 02');
  message += 'bbbb';
  next();
});
app.use((req, res, next) => {
  console.log('express middleware 03');
  message += 'ccc';
});

app.listen(3000, () => console.log('express服务器开启'));
