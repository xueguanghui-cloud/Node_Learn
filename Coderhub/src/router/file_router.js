const KoaRouter = require("@koa/router");
const { verifyAuthorization } = require("../middleware/login_middleware");
const { create } = require("../controller/file_controller");
const handleAvatarUpload = require("../middleware/file_middleware");

// 创建路由对象
const fileRouter = new KoaRouter({ prefix: "/file" });

// 上传头像
fileRouter.post("/avatar", verifyAuthorization, handleAvatarUpload, create);

module.exports = fileRouter;
