const jwt = require('jsonwebtoken')
const { PRIVATE_KEY } = require('../config/screct')



class LoginController {
  sign(ctx, next) {
    // 获取用户信息
    const { id, username } = ctx.user

    // 颁发令牌
    const token = jwt.sign({ id, username }, PRIVATE_KEY, {
      expiresIn: 24 * 60 * 60,
      algorithm: 'RS256',
    })
    
    // 返回用户信息
    ctx.body = { code: 0, data: { id, username, token } }
  }

  test(ctx, next){
    ctx.body = { code: 0, data: ctx.user  }
  }
}

module.exports = new LoginController();