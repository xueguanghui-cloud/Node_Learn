const KoaRouter = require("@koa/router");
const { verifyAuthorization } = require("../middleware/login_middleware");
const {
  create,
  list,
  detail,
  update,
  remove,
  addLabels,
} = require("../controller/moment_controller");
const { verifyPermission } = require("../middleware/permission_middleware");
const { verifyLabelExists } = require("../middleware/label_middleware");

// 创建路由对象
const momentRouter = new KoaRouter({ prefix: "/moment" });

// 发表动态接口
momentRouter.post("/", verifyAuthorization, create);

// 获取动态接口
momentRouter.get("/", list);

// 获取动态详情
momentRouter.get("/:momentId", verifyAuthorization, detail);

// 删除动态
momentRouter.delete(
  "/:momentId",
  verifyAuthorization,
  verifyPermission,
  remove
);

// 修改动态：需要验证用户权限才能修改动态
momentRouter.patch("/:momentId", verifyAuthorization, verifyPermission, update);

// 添加标签
momentRouter.post(
  "/:momentId/labels",
  verifyAuthorization,
  verifyPermission,
  verifyLabelExists,
  addLabels
);

module.exports = momentRouter;
