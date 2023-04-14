const jwt = require("jsonwebtoken");
const {
  USERNAME_OR_PASSWORD_IS_REQUIRED,
  USER_DOES_NOT_EXIST,
  PASSWORD_INCORRECT,
  UNAUTHORIZATION,
} = require("../config/error_const");
const userService = require("../service/user_service");
const md5password = require("../utils/md5_password");
const { PUBLIC_KEY } = require("../config/screct");

/**
 * 验证用户登录
 * @param {*} ctx
 * @param {*} next
 * @returns
 */
const verifyLogin = async (ctx, next) => {
  const { username, password } = ctx.request.body;

  // 判断用户名和密码是否为空
  if (!username || !password) {
    return ctx.app.emit("error", USERNAME_OR_PASSWORD_IS_REQUIRED, ctx);
  }

  // 查询用户在数据库中是否存在
  const users = await userService.findUserByUsername(username);

  const user = users[0];
  if (!user) {
    return ctx.app.emit("error", USER_DOES_NOT_EXIST, ctx);
  }

  // 查询数据库中的密码和用户传递的密码是否一致
  if (user.password !== md5password(password)) {
    return ctx.app.emit("error", PASSWORD_INCORRECT, ctx);
  }

  // 将 user 对象保存到ctx中
  ctx.user = user;

  // 颁发token
  await next();
};

/**
 * 验证token是否合法
 * @param {*} ctx
 * @param {*} next
 */
const verifyAuthorization = async (ctx, next) => {
  // 获取token
  const authorization = ctx.headers.authorization;

  if (!authorization) {
    return ctx.app.emit("error", UNAUTHORIZATION, ctx);
  }

  const token = authorization.replace("Bearer ", "");

  // 验证token是否有效
  try {
    const verifyResult = jwt.verify(token, PUBLIC_KEY, {
      algorithm: "RS256",
    });

    // 将token的信息保留
    ctx.user = verifyResult;

    await next();
  } catch (err) {
    ctx.app.emit("error", UNAUTHORIZATION, ctx);
  }
};
module.exports = {
  verifyLogin,
  verifyAuthorization,
};
