const app = require('../app')
const { USERNAME_OR_PASSWORD_IS_REQUIRED, USERNAME_OCCUPIED } = require('../config/error_const')

app.on('error', (error, ctx) => {
  let code = 0, message = ''
  switch(error){
    case USERNAME_OR_PASSWORD_IS_REQUIRED:
      code = -1001
      message = '用户名和密码不能为空'
      break;
    case USERNAME_OCCUPIED:
      code = -1002
      message = '用户名已存在'
      break;
  }
  ctx.body = {
    code,
    message
  }
})