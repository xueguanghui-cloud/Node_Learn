const Koa =  require('koa')
const bodyParser = require('koa-bodyparser')
const registerRoutes = require('../router')

const app = new Koa()

app.use(bodyParser())
registerRoutes(app)

module.exports = app