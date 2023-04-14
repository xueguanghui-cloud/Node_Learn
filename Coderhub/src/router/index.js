const fs = require('fs');
const registerRouters = (app) => {
  // 读取当前文件夹下的所有模块
  const files = fs.readdirSync(__dirname)
 
  // 遍历所有文件
  for (const file of files) {
    if(!file.endsWith('_router.js')) continue;
    const router = require(`./${file}`)
    app.use(router.routes()).use(router.allowedMethods())
  }
}

module.exports = registerRouters