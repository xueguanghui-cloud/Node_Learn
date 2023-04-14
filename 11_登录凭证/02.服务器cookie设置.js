const Koa = require('koa');
const KoaRouter = require('@koa/router');

const app = new Koa()

const userRouter = new KoaRouter({prefix: '/users',})

userRouter.get('/login', (ctx, next) => {

  // 在服务端中为登陆的客户端设置cookie
  ctx.cookies.set('slogan', 'ikun', {
    maxAge: 60 * 1000
  })
  ctx.body = '登陆成功'
})

userRouter.get('/list', (ctx, next) => {
  // 验证用户的登陆凭证
  const value = ctx.cookies.get('slogan')
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