const connection = require('../app/database')

class UserService {
  async create(user) {
    // 获取用户
    const { username, password } = user;
    
    // 拼接 statement
    const statement = 'INSERT INTO `user`(username, password) VALUES(?, ?);'

    // 执行sql语句
    const [ result ] = await connection.execute(statement, [username, password]);
    return result
  }

  async findUserByUsername(username) {
    const statement = 'SELECT * FROM `user` WHERE username = ?;'
    const [values] = await connection.execute(statement, [username]);
    return values
  }
}

module.exports = new UserService();