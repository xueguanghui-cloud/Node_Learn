const mysql = require('mysql2');

// 创建一个链接（连接数据库）
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '123456',
  database: 'music_db'
})

// 执行sql语句，操作数据库
const sql = 'SELECT * FROM `students`';

connection.query(sql, (err, values, fields) => {
  if(err) {
    console.log('查询失败', err);
    return
  }
  // 查询结果
  console.log(values);
  // console.log(fields);
})