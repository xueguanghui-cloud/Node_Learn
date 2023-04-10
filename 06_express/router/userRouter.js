/** @format */

const express = require('express');

// 将用户接口定义在单独的路由对象中
const userRouter = express.Router();
userRouter.get('/', (req, res, next) => {
  res.json({
    code: 0,
    message: '用户列表',
    list: [
      { id: 1, name: 'John', age: 32 },
      { id: 2, name: 'Jane', age: 36 },
      { id: 3, name: 'Susan', age: 43 }
    ]
  });
});
userRouter.get('/:id', (req, res, next) => {
  res.json({
    code: 0,
    message: '查询成功',
    userInfo: { id: 1, name: 'John', age: 32 }
  });
});
userRouter.post('/', (req, res, next) => {
  res.json({
    code: 0,
    message: '添加成功',
    userInfo: { id: 4, name: 'John', age: 32 }
  });
});
userRouter.delete('/:id', (req, res, next) => {
  res.json({
    code: 0,
    message: '删除成功',
    userInfo: { id: 4, name: 'John', age: 32 }
  });
});
userRouter.patch('/:id', (req, res, next) => {
  res.json({
    code: 0,
    message: '修改成功',
    userInfo: { id: 4, name: 'John', age: 32 }
  });
});

// 导出路由
module.exports = userRouter;
