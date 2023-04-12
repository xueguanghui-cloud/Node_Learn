const userService = require('../service/user_service')
const md5password = require('../utils/md5_password')
const { USERNAME_OR_PASSWORD_IS_REQUIRED, USERNAME_OCCUPIED } = require('../config/error_const')

/**
 * 验证客户端传递过来的数据是否可以保存到数据库中
 * @param {*} ctx ctx
 * @param {*} next  next
 * @returns Promise
 */
const verifyUser = async (ctx, next) => {
  // 
  // 1. 验证用户名或密码是否为空
  const { username, password } = ctx.request.body
  if(!username || !password) {
    return ctx.app.emit('error', USERNAME_OR_PASSWORD_IS_REQUIRED, ctx)
  }

  // 2. 判断username在数据库中是否存在
  const users = await userService.findUserByUsername(username)
  if(users.length) {
    return ctx.app.emit('error', USERNAME_OCCUPIED, ctx)
  }

  // 执行下一个中间件
  await next()
}

/**
 * 对用户密码进行加密
 * @param {*} ctx 
 * @param {*} next 
 */
const handlePassword = async (ctx, next) => {
  const { password } = ctx.request.body
  
  // 对密码进行加密
  ctx.request.body.password = md5password(password)

  await next()
}

module.exports = {
  verifyUser,
  handlePassword
}