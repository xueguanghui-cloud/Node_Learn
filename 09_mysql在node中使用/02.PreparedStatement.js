const mysql = require('mysql2');

// 创建一个链接（连接数据库）
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '123456',
  database: 'music_db'
})

// 执行sql语句，预处理语句
const sql = 'SELECT * FROM `students` where name = ? AND age = ?';

connection.execute(sql, ['codexgh', 22], (err, values) => {
  if(err) {
    console.log('查询失败', err);
    return
  }
  // 查询结果
  console.log(values);
})