/** @format */

const Koa = require('koa');
const KoaRouter = require('@koa/router');
const bodyParser = require('koa-bodyparser');
const multer = require('@koa/multer');
// 创建app对象
const app = new Koa();

// 使用第三方中间件解析 body 数据
app.use(bodyParser());
const formParser = multer();

// 创建路由对象
const userRouter = new KoaRouter({ prefix: '/users' });

/* 
  1. get: params 方式， 例子 “/users/:id”
  2. get: query 方式， 例子 “/users?id=foo”
  3. post: json 方式， 例子 “{ "name": "codexgh" }”
  4. post: x-www-form-urlencoded 方式
  5. post: multipart/form-data 方式
*/
// 1. get: params 方式
userRouter.get('/:id', (ctx, next) => {
  console.log('params: ', ctx.params);
  ctx.body = '获取成功, id=' + ctx.params.id;
});

// 2. get: query 方式
userRouter.get('/', (ctx, next) => {
  console.log('query: ', ctx.query);
  ctx.body = '获取成功, id=' + ctx.query.id;
});

// 3. post: json(使用最多) 方式
userRouter.post('/', (ctx, next) => {
  console.log('json: ', ctx.request.body);
  ctx.body = '获取成功, name=' + ctx.request.body.name;
});

// 4. post: x-www-form-urlencoded 方式
userRouter.post('/urlencoded', (ctx, next) => {
  console.log('x-www-form-urlencoded: ', ctx.request.body);
  ctx.body = '获取成功, name=' + ctx.request.body.name;
});

// 5. post: multipart/form-data 方式
userRouter.post('/formData', formParser.any(), (ctx, next) => {
  console.log('multipart/form-data: ', ctx.request.body);
  ctx.body = '获取成功, name=' + ctx.request.body.name;
});

// 将路由器绑定到app对象上面
app.use(userRouter.routes()).use(userRouter.allowedMethods());

// 启动服务器
app.listen(3000, () => {
  console.log('koa 服务器启动成功');
});
