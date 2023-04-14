const KoaRouter = require("@koa/router");
const { verifyAuthorization } = require("../middleware/login_middleware");
const { create, list } = require("../controller/label_controller");

// 创建路由对象
const labelRouter = new KoaRouter({ prefix: "/label" });

// 创建标签
labelRouter.post("/", verifyAuthorization, create);

// 获取标签列表
labelRouter.get("/list", list);

module.exports = labelRouter;
