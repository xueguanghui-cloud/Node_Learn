const connection = require("../app/database");

class homeService {
  /**
   * 发表动态
   * @param {*} content 动态内容
   * @param {*} userId 发表用户id
   * @returns
   */
  async create(content, userId) {
    const statement = "INSERT INTO `moment`(content, user_id) VALUES(?, ?);";
    const [result] = await connection.execute(statement, [content, userId]);
    return result;
  }

  /**
   * 获取动态列表
   * @param {*} userId 用户id
   */
  async queryList(offset = 0, pageSize = 10) {
    const statement = `
    SELECT
      moment.id AS id,
      moment.content AS content,
      moment.createAt AS createTime,
      moment.updateAt AS updateTime,
      JSON_OBJECT(
        'id', user.id,
        'username', user.username,
        'avatarURL', user.avatar_url,
        'createTime', user.createAt,
        'updateTime', user.updateAt
      )AS user,
      (SELECT COUNT(*) FROM comment WHERE comment.moment_id = moment.id)AS commentCount,
      (SELECT COUNT(*) FROM moment_label WHERE moment_label.moment_id = moment.id)AS labelCount
    FROM
      moment
    LEFT JOIN user ON user.id = moment.user_id LIMIT ?, ?;

    `;
    const [result] = await connection.execute(statement, [
      String(offset),
      String(pageSize),
    ]);
    return result;
  }

  /**
   * 根据动态id获取动态详情
   * @param {*} momentId 动态id
   * @returns
   */
  async queryById(momentId) {
    const statement = `
        SELECT
        moment.id AS id,
        moment.content AS content,
        moment.createAt AS createTime,
        moment.updateAt AS updateTime,
        JSON_OBJECT(
          'id', user.id,
          'username', user.username,
          'avatarRUL', user.avatar_url,
          'createTime', user.createAt,
          'updateTime', user.updateAt
        )AS user,
        (
          SELECT 
            JSON_ARRAYAGG(JSON_OBJECT(
              'id',c.id, 'content', c.content, 'commentId', c.comment_id, 'createTime', c.createAt, 'updateTime', c.updateAt,
              'user', JSON_OBJECT('id', cu.id, 'username', cu.username, 'avatarURL', cu.avatar_url)
            ))
          FROM comment AS c
          LEFT JOIN user AS cu ON c.user_id = cu.id
          WHERE c.moment_id = moment.id
        ) AS commentList,
        (JSON_ARRAYAGG(JSON_OBJECT(
            'id', label.id, 'name', label.name
          )
        )) AS labelList
      FROM
        moment
      LEFT JOIN user ON user.id = moment.user_id
      
      LEFT JOIN moment_label ON moment_label.moment_id = moment.id
      LEFT JOIN label ON label.id = moment_label.label_id
      
      WHERE moment.id = 2
      GROUP BY moment.id;
    `;
    const [result] = await connection.execute(statement, [momentId]);
    return result;
  }

  /**
   * 根据动态id删除动态
   * @param {*} momentId 动态id
   * @returns
   */
  async removeById(momentId) {
    const statement = `DELETE FROM moment WHERE id = ?;`;
    const [result] = await connection.execute(statement, [momentId]);
    return result;
  }

  /**
   * 根据动态id修改动态
   * @param {*} content 动态内容
   * @param {*} momentId 动态id
   * @returns
   */
  async updateById(content, momentId) {
    const statement = `UPDATE moment SET content = ? WHERE id = ?;`;
    const [result] = await connection.execute(statement, [content, momentId]);
    return result;
  }

  /**
   * 判断momentId和labelId是否存在对应关系
   * @param {*} momentId 动态id
   * @param {*} labelId 标签id
   * @returns
   */
  async hasLabel(commentId, labelId) {
    const statement =
      "SELECT * FROM moment_label WHERE moment_id = ? AND label_id = ?;";

    const [result] = await connection.execute(statement, [commentId, labelId]);
    return !!result.length;
  }

  /**
   * 为动态添加labels
   * @param {*} commentId
   * @param {*} labelId
   * @returns
   */
  async addLabel(commentId, labelId) {
    const statement =
      "INSERT INTO moment_label(moment_id, label_id) VALUES(?, ?);";

    const [result] = await connection.execute(statement, [commentId, labelId]);
    return result;
  }
}

module.exports = new homeService();
