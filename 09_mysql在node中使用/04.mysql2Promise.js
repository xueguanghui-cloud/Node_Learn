const mysql = require('mysql2');

// 创建一个链接（连接数据库）
const connectionPool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '123456',
  database: 'music_db',
  connectionLimit: 5 // 最大连接数量
})

// 执行sql语句，操作数据库
const sql = 'SELECT * FROM `students`';

connectionPool.promise().execute(sql).then(([values, fields])=>{
  console.log(values);
}).catch(err=>{
  console.log(err);
})