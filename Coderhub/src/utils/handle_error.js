const app = require("../app");
const {
  USERNAME_OR_PASSWORD_IS_REQUIRED,
  USERNAME_OCCUPIED,
  USER_DOES_NOT_EXIST,
  PASSWORD_INCORRECT,
  UNAUTHORIZATION,
  OPERATION_IS_NOT_ALLOWED,
  DATABASE_OPERATION_FAILED,
  FILE_DOES_NOT_EXIST,
} = require("../config/error_const");

app.on("error", (error, ctx) => {
  let code = 0,
    message = "";
  switch (error) {
    case USERNAME_OR_PASSWORD_IS_REQUIRED:
      code = -1001;
      message = "用户名和密码不能为空";
      break;
    case USERNAME_OCCUPIED:
      code = -1002;
      message = "用户名已存在";
      break;
    case USER_DOES_NOT_EXIST:
      code = -1003;
      message = "用户不存在";
      break;
    case PASSWORD_INCORRECT:
      code = -1004;
      message = "输入的密码错误，请检查密码";
      break;
    case UNAUTHORIZATION:
      code = -1005;
      message = "无效的token或token已过期";
      break;
    case OPERATION_IS_NOT_ALLOWED:
      code = -2001;
      message = "没有操作该资源的权限";
      break;
    case DATABASE_OPERATION_FAILED:
      code = -3001;
      message = "操作数据库失败，请检查数据";
      break;
    case FILE_DOES_NOT_EXIST:
      code = -4001;
      message = "文件不存在";
      break;
  }
  ctx.body = {
    code,
    message,
  };
});
