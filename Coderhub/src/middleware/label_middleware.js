const labelService = require("../service/label_service");

/**
 * 验证label是否已经存在
 * @param {*} ctx
 * @param {*} next
 */
const verifyLabelExists = async (ctx, next) => {
  const { labels } = ctx.request.body;

  const newLabels = [];

  for (const label of labels) {
    const result = await labelService.queryLabelExists(label);

    const labelObj = {
      id: null,
      name: label,
    };

    if (result) {
      // 如果存在，直接获取label对应的id
      labelObj.id = result.id;
    } else {
      // 如果不存在，先插入label，然后获取其id
      const insertResult = await labelService.create(label);
      labelObj.id = insertResult.insertId;
    }
    newLabels.push(labelObj);
  }

  // 所有的labels 都变为 [{ id: 1, name: '前端' }, { id: 2, name: '后端' }]
  ctx.labels = newLabels;

  await next();
};

module.exports = {
  verifyLabelExists,
};
