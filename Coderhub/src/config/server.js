const dotenv = require("dotenv");

dotenv.config(); // 加载环境变量
const { SERVER_HOST, SERVER_PORT } = process.env;
module.exports = { SERVER_HOST, SERVER_PORT };
