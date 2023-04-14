const KoaRouter = require("@koa/router");
const {
  verifyLogin,
  verifyAuthorization,
} = require("../middleware/login_middleware");
const { sign, test } = require("../controller/login_controller");

// 创建路由对象
const loginRouter = new KoaRouter({ prefix: "/login" });

// 用户登录接口
loginRouter.post("/", verifyLogin, sign);
loginRouter.post("/test", verifyAuthorization, test);

module.exports = loginRouter;
