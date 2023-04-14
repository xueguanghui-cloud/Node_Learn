const KoaRouter = require("@koa/router");
const { create, showAvatarImage } = require("../controller/user_controller");
const { verifyUser, handlePassword } = require("../middleware/user_middleware");

// 创建路由对象
const userRouter = new KoaRouter({ prefix: "/users" });

// 用户注册接口
userRouter.post("/register", verifyUser, handlePassword, create);

// 头像接口
userRouter.get("/avatar/:userId", showAvatarImage);

module.exports = userRouter;
