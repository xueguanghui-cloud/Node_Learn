const Koa =  require('koa')
const userRouter = require('../router/user_router')
const bodyParser = require('koa-bodyparser')

const app = new Koa()

app.use(bodyParser())
app.use(userRouter.routes()).use(userRouter.allowedMethods())

module.exports = app