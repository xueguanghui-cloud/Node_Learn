const connection = require("../app/database");

class PermissionService {
  /* async checkMoment(momentId, userId) {
    const statement = "SELECT * FROM moment WHERE id = ? AND user_id = ?;";
    const [result] = await connection.execute(statement, [momentId, userId]);
    return !!result.length;
  } */

  /**
   * 检查资源权限
   * @param {*} resouceName 资源名
   * @param {*} resouceId 资源id
   * @param {*} userId 用户id
   * @returns
   */
  async checkResouce(resouceName, resouceId, userId) {
    const statement = `SELECT * FROM ${resouceName} WHERE id = ? AND user_id = ?;`;
    const [result] = await connection.execute(statement, [resouceId, userId]);
    return !!result.length;
  }
}

module.exports = new PermissionService();
