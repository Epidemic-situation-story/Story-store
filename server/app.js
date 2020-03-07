var express = require('express')
var AV = require('leanengine')
var timeout = require('connect-timeout')
var path = require('path')
var bodyParser = require('body-parser')

AV.init({
  appId: process.env.LEANCLOUD_APP_ID || 'Smo430Pphf3PhvO7yCuib2j2-gzGzoHsz',
  appKey: process.env.LEANCLOUD_APP_KEY || 'BNaknEiw3lf0BagMc0QmapKw',
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY || '3rNvA8eGva5LaucDcffhP34O'
})

var app = express()
app.enable('trust proxy')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(AV.express())
// 设置模板引擎
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

// 设置默认超时时间
app.use(timeout('15s'))

// 路由设置
app.use('/v1/test', require('./routes/test'))
app.use('/v1/banner', require('./routes/banner'))
app.use('/v1/user', require('./routes/user'))

// 设置静态资源
app.use(express.static('public'))

app.use(function(req, res, next) {
  // 如果任何一个路由都没有返回响应，则抛出一个 404 异常给后续的异常处理器
  if (!res.headersSent) {
    var err = new Error('Not Found')
    err.status = 404
    next(err)
  }
})

// error handlers
app.use(function(err, req, res, next) {
  if (req.timedout && req.headers.upgrade === 'websocket') {
    // 忽略 websocket 的超时
    return
  }

  var statusCode = err.status || 500
  if (statusCode === 500) {
    console.error(err.stack || err)
  }
  if (req.timedout) {
    console.error(
      '请求超时: url=%s, timeout=%d, 请确认方法执行耗时很长，或没有正确的 response 回调。',
      req.originalUrl,
      err.timeout
    )
  }
  res.status(statusCode)
  // 默认不输出异常详情
  var error = {}
  if (app.get('env') === 'development') {
    // 如果是开发环境，则将异常堆栈输出到页面，方便开发调试
    error = err
  }
  // res.render('error', {
  //   message: err.message,
  //   error: error
  // })
  res.json({
    returnCode: -1,
    errMsg: err.message
  })
})
app.listen(process.env.LEANCLOUD_APP_PORT || 3366)
