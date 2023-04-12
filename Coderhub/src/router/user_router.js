const KoaRouter =  require('@koa/router')
const userController = require('../controller/user_controller')
const {verifyUser, handlePassword} = require('../middleware/user_middleware')

// 创建路由对象
const userRouter = new KoaRouter({ prefix: '/users' })

// 用户注册接口
userRouter.post('/register',verifyUser, handlePassword, userController.create)


module.exports = userRouter
