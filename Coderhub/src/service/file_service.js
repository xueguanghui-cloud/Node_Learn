const connection = require("../app/database");

class FileService {
  /**
   * 上传用户头像
   */
  async create(filename, mimetype, size, userId) {
    const statement =
      "INSERT INTO avatar(filename, mimetype, size, user_id) VALUES(?, ?, ?, ?);";
    const [result] = await connection.execute(statement, [
      filename,
      mimetype,
      size,
      userId,
    ]);
    return result;
  }

  /**
   * 获取用户最新头像
   * @param {*} userId 用户id
   * @returns
   */
  async queryAvatarByUserId(userId) {
    const statement = "SELECT * FROM avatar WHERE user_id = ?;";
    const [result] = await connection.execute(statement, [userId]);
    console.log(result);
    // 返回最新头像信息
    return result.pop();
  }
}

module.exports = new FileService();
