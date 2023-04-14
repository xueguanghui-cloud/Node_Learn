const labelService = require("../service/label_service");

class LabelController {
  /**
   * 新增标签
   * @param {*} ctx
   * @param {*} next
   */
  async create(ctx, next) {
    const { name } = ctx.request.body;

    // 操作数据库存储 标签名
    const result = await labelService.create(name);
    ctx.body = {
      code: 0,
      message: "新增标签成功",
      data: result,
    };
  }

  /**
   * 获取标签列表
   * @param {*} ctx
   * @param {*} next
   */
  async list(ctx, next) {
    const result = await labelService.list();

    ctx.body = {
      code: 0,
      message: "标签列表",
      data: result,
    };
  }
}

module.exports = new LabelController();
