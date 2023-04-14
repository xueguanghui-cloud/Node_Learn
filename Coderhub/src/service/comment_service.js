const connection = require("../app/database");

class CommentService {
  /**
   * 发表评论
   * @param {*} content 发表内容
   * @param {*} momentId  动态id
   * @param {*} userId 用户id
   * @returns
   */
  async create(content, momentId, userId) {
    const statement =
      "INSERT INTO comment(content, moment_id, user_id) VALUES(?, ?, ?);";
    const [result] = await connection.execute(statement, [
      content,
      momentId,
      userId,
    ]);
    return result;
  }

  /**
   * 回复评论
   * @param {*} content 回复内容
   * @param {*} momentId 动态id
   * @param {*} commentId 回复id
   * @param {*} userId  用户id
   * @returns
   */
  async reply(content, momentId, commentId, userId) {
    const statement =
      "INSERT INTO comment(content, moment_id, comment_id, user_id) VALUES(?, ?, ?, ?);";
    const [result] = await connection.execute(statement, [
      content,
      momentId,
      commentId,
      userId,
    ]);
    return result;
  }

  /**
   * 删除评论
   * @param {*} content 回复内容
   * @param {*} momentId 动态id
   * @param {*} commentId 回复id
   * @param {*} userId  用户id
   * @returns
   */
  async remove(commentId) {
    const statement = "DELETE FROM comment WHERE id = ?;";

    const [result] = await connection.execute(statement, [commentId]);
    return result;
  }
}

module.exports = new CommentService();
