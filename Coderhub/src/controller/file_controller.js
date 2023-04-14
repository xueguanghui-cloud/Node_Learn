const { SERVER_PORT, SERVER_HOST } = require("../config/server");
const { create } = require("../service/file_service");
const { updateUserAvatar } = require("../service/user_service");

class FileController {
  /**
   * 上传用户头像
   */
  async create(ctx, next) {
    // 获取头像信息
    try {
      const { filename, mimetype, size } = ctx.request.file;
      const { id } = ctx.user;

      // 将头像信息存储到数据库中
      await create(filename, mimetype, size, id);

      // 将头像的地址信息保存到user表中
      const avatarUrl = `${SERVER_HOST}:${SERVER_PORT}/users/avatar/${id}`;
      await updateUserAvatar(avatarUrl, id);

      ctx.body = {
        code: 0,
        message: "头像上传成功",
        data: {
          avatarUrl,
        },
      };
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new FileController();
