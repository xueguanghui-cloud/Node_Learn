const connection = require("../app/database");

class LabelService {
  /**
   * 创建标签
   * @param {string} name 标签名
   */
  async create(name) {
    const statement = "INSERT INTO label(name) VALUES(?);";
    const [result] = await connection.execute(statement, [name]);
    return result;
  }

  /**
   * 获取标签列表
   */
  async list() {
    const statement = "SELECT * FROM label;";
    const [result] = await connection.execute(statement);
    return result;
  }

  /**
   * 从数据中查询label是否已经存在
   * @param {*} name 标签名
   * @returns
   */
  async queryLabelExists(name) {
    const statement = "SELECT * FROM label WHERE name = ?;";
    const [result] = await connection.execute(statement, [name]);
    return result[0];
  }
}

module.exports = new LabelService();
