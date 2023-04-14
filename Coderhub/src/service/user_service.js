const connection = require("../app/database");

class UserService {
  /**
   * 创建用户
   */
  async create(user) {
    // 获取用户
    const { username, password } = user;

    // 拼接 statement
    const statement = "INSERT INTO `user`(username, password) VALUES(?, ?);";

    // 执行sql语句
    const [result] = await connection.execute(statement, [username, password]);
    return result;
  }

  /**
   * 根据用户名获取用户信息
   * @param {*} username 用户名
   * @returns
   */
  async findUserByUsername(username) {
    const statement = "SELECT * FROM `user` WHERE username = ?;";
    const [values] = await connection.execute(statement, [username]);
    return values;
  }

  /**
   * 更新用户头像
   * @param {*} avatarUrl 用户头像地址
   * @param {*} userId 用户id
   */
  async updateUserAvatar(avatarUrl, userId) {
    const statement = "UPDATE `user` SET avatar_url = ? WHERE id = ?;";
    const [values] = await connection.execute(statement, [avatarUrl, userId]);
    return values;
  }
}

module.exports = new UserService();
