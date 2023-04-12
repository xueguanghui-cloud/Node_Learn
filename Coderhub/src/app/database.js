const mysql = require('mysql2')

const connectionPool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '123456',
  database: 'coderhub',
  connectionLimit: 5 // 最大连接数量
})

// 获取连接是否成功
connectionPool.getConnection((err, connection) => {
  if(err) {
    console.log('连接数据库失败', err);
    return
  }
  // 获取connection，尝试和数据库建立连接
  connection.connect((err)=>{
    if(err) {
      console.log('与数据库交互失败', err);
      return
    }
    console.log('连接数据库成功');
  })
})

const connection = connectionPool.promise()

module.exports = connection