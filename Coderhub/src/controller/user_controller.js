const fs = require("fs");
const { UPLOAD_PATH } = require("../config/path");
const { FILE_DOES_NOT_EXIST } = require("../config/error_const");
const fileService = require("../service/file_service");
const userService = require("../service/user_service");

class UserController {
  /**
   * 创建用户
   */
  async create(ctx, next) {
    const user = ctx.request.body;

    // 将用户信息存储到数据库中
    const result = await userService.create(user);

    // 返回结果
    ctx.body = {
      message: "创建用户成功",
      data: result,
    };
  }

  /**
   * 获取用户头像接口
   * @param {*} ctx
   * @param {*} next
   */
  async showAvatarImage(ctx, next) {
    // 获取用户id
    const { userId } = ctx.params;

    // 获取 userId 对应头像信息
    const avatarInfo = await fileService.queryAvatarByUserId(userId);

    if (!avatarInfo) {
      return ctx.app.emit("error", FILE_DOES_NOT_EXIST, ctx);
    }

    // 读取头像所在的文件
    const { filename, mimetype } = avatarInfo;
    ctx.type = mimetype;
    ctx.body = fs.createReadStream(`${UPLOAD_PATH}/${filename}`);
  }
}

module.exports = new UserController();
