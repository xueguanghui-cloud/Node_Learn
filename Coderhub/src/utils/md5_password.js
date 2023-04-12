const crypto = require('crypto')
/**
 * 使用md5对密码进行加密
 * @param {*} password 
 * @returns md5password
 */
const md5password = (password) => {
  const md5 = crypto.createHash('md5')

  // 用md5进行加密，然后转换为16进制
  return md5.update(password).digest('hex')

}

module.exports= md5password