const app = require('./app')
const { SERVER_PORT } = require('./config/server')
require('./utils/handle_error')


app.listen(SERVER_PORT, ()=>{
  console.log('CoderHub服务已启动');
})