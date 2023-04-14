const KoaRouter = require("@koa/router");
const { create, reply, remove } = require("../controller/comment_controller");
const { verifyAuthorization } = require("../middleware/login_middleware");
const { verifyPermission } = require("../middleware/permission_middleware");

// 创建路由对象
const commentRouter = new KoaRouter({ prefix: "/comment" });

// 发表评论
commentRouter.post("/", verifyAuthorization, create);

// 回复评论
commentRouter.post("/reply", verifyAuthorization, reply);

// 删除评论
commentRouter.delete(
  "/:commentId",
  verifyAuthorization,
  verifyPermission,
  remove
);

module.exports = commentRouter;
