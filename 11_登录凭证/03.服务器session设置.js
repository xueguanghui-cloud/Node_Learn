const Koa = require('koa');
const KoaRouter = require('@koa/router');
const KoaSession = require('koa-session')

const app = new Koa()

const userRouter = new KoaRouter({prefix: '/users',})

const session = KoaSession({
  key: 'sessionId',
  signed: true,
  maxAge: 60 * 1000 * 5
}, app)
// 加盐操作
app.keys = ['aaa', 'bbb', 'codexgh']
app.use(session)

userRouter.get('/login', (ctx, next) => {
  // 在服务端中为登陆的客户端设置cookie
  ctx.session.slogan = 'ikun'

  ctx.body = '登陆成功'
})

userRouter.get('/list', (ctx, next) => {
  // 验证用户的登陆凭证
  const value = ctx.session.slogan
  console.log(value);
  if(value === 'ikun'){
    ctx.body = 'user list data'
  }else{
    ctx.body = '未登录'
  }
})

app.use(userRouter.routes()).use(userRouter.allowedMethods())

app.listen(3333, ()=>{
  console.log("服务器启动成功");
})