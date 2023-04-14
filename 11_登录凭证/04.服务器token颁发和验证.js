const Koa = require('koa');
const KoaRouter = require('@koa/router');
const jwt = require('jsonwebtoken')

const app = new Koa()

const userRouter = new KoaRouter({prefix: '/users',})

const secreKey = 'als;dfjkalsfjlasfjkla'

userRouter.get('/login', (ctx, next) => {
  // 颁发token  
  const payload = {id: 111, name: 'codexgh'}
  const token = jwt.sign(payload,secreKey, {
    expiresIn: 60
  })

  ctx.body = {
    code: 0,
    token,
    message: '登录成功'
  }
})

userRouter.get('/list', (ctx, next) => {
  // 获取客户端携带过来的token
  const authorization = ctx.headers.authorization
  const token = authorization.replace('Bearer ', '')
  
  // 验证token
  try{
    const verify =  jwt.verify(token, secreKey)
    console.log("verify", verify);
    ctx.body = {
      code: 0,
      data: [
        {id: 0001, name: 'codexgh'},
        {id: 0002, name: 'codexgh'},
        {id: 0003, name: 'codexgh'},
      ]
    }
  }catch(err){
    ctx.body = {
      code: -1002,
      message: 'toke已经过期或者非法'
    }
  }
})

app.use(userRouter.routes()).use(userRouter.allowedMethods())

app.listen(3333, ()=>{
  console.log("服务器启动成功");
})