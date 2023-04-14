const { OPERATION_IS_NOT_ALLOWED } = require("../config/error_const");
const { checkResouce } = require("../service/permission_service");

// 有局限：验证登录的用户是否有操作 moment 的权限
/* const verifyMomentPermission = async (ctx, next) => {
  // 获取登录用户id/修改动态的id
  const { momentId } = ctx.params;
  const { id } = ctx.user;

  // 查询 user的id是否有修改momentid的权限
  const isPermission = await checkMoment(momentId, id);
  if (!isPermission) {
    return ctx.app.emit("error", OPERATION_IS_NOT_ALLOWED, ctx);
  }

  await next();
}; */

/*const verifyPermission = (resouce) => {
  return async (ctx, next) => {
    // 获取登录用户id/修改动态的id
    const { id } = ctx.user;
    const { momentId } = ctx.params;

    // 查询 user的id是否有修改momentid的权限
    const isPermission = await checkMoment(momentId, id);
    if (!isPermission) {
      return ctx.app.emit("error", OPERATION_IS_NOT_ALLOWED, ctx);
    }

    await next();
  };
};*/

const verifyPermission = async (ctx, next) => {
  // 获取登录用户id
  const { id } = ctx.user;

  // 获取资源的 name（moment/user/comment/label）/id
  const keyName = Object.keys(ctx.params)[0];
  const resouceId = ctx.params[keyName];
  const resouceName = keyName.replace("Id", "");

  // 查询 user的id是否有修改 某个权限 的权限
  const isPermission = await checkResouce(resouceName, resouceId, id);
  if (!isPermission) {
    return ctx.app.emit("error", OPERATION_IS_NOT_ALLOWED, ctx);
  }

  await next();
};

module.exports = {
  verifyPermission,
};
