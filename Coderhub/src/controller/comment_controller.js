const commentService = require("../service/comment_service");
class CommentController {
  /**
   * 发表评论
   * @param {*} ctx
   * @param {*} next
   */
  async create(ctx, next) {
    // 获取body中的参数
    const { content, momentId } = ctx.request.body;
    const { id } = ctx.user;

    // 操作数据库，将数据存储
    const result = await commentService.create(content, momentId, id);

    ctx.body = {
      code: 0,
      message: "发表评论成功",
      data: result,
    };
  }

  /**
   * 回复评论
   * @param {*} ctx
   * @param {*} next
   */
  async reply(ctx, next) {
    // 获取body中的参数
    const { content, momentId, commentId } = ctx.request.body;
    const { id } = ctx.user;

    // 操作数据库，将数据存储
    const result = await commentService.reply(content, momentId, commentId, id);

    ctx.body = {
      code: 0,
      message: "回复评论成功",
      data: result,
    };
  }

  /**
   * 删除评论
   * @param {*} ctx
   * @param {*} next
   */
  async remove(ctx, next) {
    // 获取body中的参数
    const { commentId } = ctx.params;

    console.log(commentId);
    // 操作数据库，将数据存储
    const result = await commentService.remove(commentId);

    ctx.body = {
      code: 0,
      message: "删除评论成功",
      data: result,
    };
  }
}

module.exports = new CommentController();
