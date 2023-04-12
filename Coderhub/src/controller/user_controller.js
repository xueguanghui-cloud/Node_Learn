const userService = require('../service/user_service')

class UserController {
  /**
   * 创建用户
   */
  async create(ctx, next){
    const user = ctx.request.body

    // 将用户信息存储到数据库中
    const result = await userService.create(user)

    // 返回结果
    ctx.body = {
      message: '创建用户成功',
      data: result
    }
  }
}

module.exports = new UserController();