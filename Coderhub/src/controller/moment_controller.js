const { DATABASE_OPERATION_FAILED } = require("../config/error_const");
const momentService = require("../service/moment_service");

class MomentController {
  /**
   * 发表动态
   * @param {*} ctx
   * @param {*} next
   */
  async create(ctx, next) {
    // 获取动态内容
    const { content } = ctx.request.body;

    // 获取登录用户id
    const { id } = ctx.user;

    // 将动态数据保存到数据库中
    const result = await momentService.create(content, id);

    ctx.body = {
      code: 0,
      message: "发表用户动态成功",
      data: result,
    };
  }

  /**
   * 获取动态列表
   * @param {*} ctx
   * @param {*} next
   */
  async list(ctx, next) {
    // 获取offset size
    const { offset, pageSize } = ctx.query;
    // 从数据库中查询动态列表
    const result = await momentService.queryList(offset, pageSize);

    ctx.body = {
      code: 0,
      message: "获取动态列表成功",
      data: result,
    };
  }

  /**
   * 获取动态详情
   * @param {*} ctx
   * @param {*} next
   */
  async detail(ctx, next) {
    // 获取 动态 id
    const { momentId } = ctx.params;
    // 从数据库中查询动态
    const result = await momentService.queryById(momentId);

    ctx.body = {
      code: 0,
      message: "获取动态详情成功",
      data: result[0],
    };
  }

  /**
   * 删除动态
   * @param {*} ctx
   * @param {*} next
   */
  async remove(ctx, next) {
    // 获取 动态 id
    const { momentId } = ctx.params;
    // 从数据库中删除动态
    const result = await momentService.removeById(momentId);

    ctx.body = {
      code: 0,
      message: "删除动态成功",
      data: result[0],
    };
  }

  /**
   * 修改动态
   * @param {*} ctx
   * @param {*} next
   */
  async update(ctx, next) {
    // 需要修改动态的id
    const { momentId } = ctx.params;
    // 修改的内容
    const { content } = ctx.request.body;
    const result = await momentService.updateById(content, momentId);

    ctx.body = {
      code: 0,
      message: "修改动态成功",
      data: result,
    };
  }

  /**
   * 为动态添加标签
   * @param {*} ctx
   * @param {*} next
   */
  async addLabels(ctx, next) {
    // 需要修改动态的id
    const labels = ctx.labels;
    const { momentId } = ctx.params;

    // 将 momentId和labelId添加到moment_labels
    try {
      for (const label of labels) {
        // 判断 momentId和labelId 是否已经存在对应关系
        const isExists = await momentService.hasLabel(momentId, label.id);
        if (!isExists) {
          // 如果不存在则插入输入
          await momentService.addLabel(momentId, label.id);
        }
      }

      ctx.body = {
        code: 0,
        message: "为动态添加标签成功",
      };
    } catch (err) {
      ctx.app.emit("error", DATABASE_OPERATION_FAILED, ctx);
    }
  }
}

module.exports = new MomentController();
