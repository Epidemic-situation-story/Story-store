var router = require('express').Router()
var AV = require('leancloud-storage')

/**
 * @api {get} /user/phoneCode phoneCode
 * @apiDescription 用户获取验证码
 * @apiGroup 用户
 * @apiVersion 0.0.1
 * @apiParam {String} phone 手机号
 */
router.get('/phoneCode', function(req, res, next) {
  var phoneReg = /^1[3|4|5|8|7|9][0-9]\d{4,8}$/
  var phone = req.query.phone
  if (phoneReg.test(phone)) {
    AV.Cloud.requestSmsCode(phone)
      .then(() => {
        res.json({
          returnCode: 0,
          errMsg: 'success'
        })
      })
      .catch(next)
  } else {
    res.json({
      returnCode: -1,
      errMsg: '请输入正确手机号'
    })
  }
})

/**
 * @api {post} /user/login login
 * @apiDescription 用户登录
 * @apiParam {String} name 用户名
 * @apiParam {String} pwd 密码
 * @apiGroup 用户
 * @apiVersion 0.0.1
 * @apiSuccess {String} name 名称
 * @apiSuccess {String} avatar 头像
 * @apiSuccess {String} intro 简介
 * @apiSuccess {String} labels 标签(多个用逗号分割)
 * @apiSuccess {String} shareCount 被转发次数
 * @apiSuccess {String} troveCount 被点赞次数
 * @apiSuccess {String} balance 余额
 */
router.post('/login', function(req, res, next) {
  var params = req.body
  if (params.name === undefined || params.name.length === 0) {
    res.json({
      returnCode: -1,
      errMsg: '用户名不能为空'
    })
  } else if (params.pwd === undefined || params.pwd.length === 0) {
    res.json({
      returnCode: -1,
      errMsg: '密码不能为空'
    })
  } else {
    AV.User.logIn(params.name.toString(), params.pwd.toString())
      .then(function(u) {
        var query = new AV.Query('Profile')
        query.equalTo('user', u)
        query
          .find()
          .then(function(p) {
            var jsonObj = p[0].toJSON()
            console.log('p:>>', jsonObj)
            res.json({
              returnCode: 0,
              errMsg: 'success',
              result: {
                id: u.id,
                name: u.getUsername(),
                avatar: jsonObj.avatar,
                intro: jsonObj.intro,
                labels: jsonObj.labels,
                shareCount: jsonObj.shareCount,
                troveCount: jsonObj.troveCount,
                balance: jsonObj.balance
              }
            })
          })
          .catch(next)
      })
      .catch(next)
  }
})

/**
 * @api {post} /user/logout logout
 * @apiDescription 用户注销
 * @apiGroup 用户
 * @apiVersion 0.0.1
 */
router.post('/logout', function(req, res, next) {
  AV.User.logOut()
    .then(() => {
      res.json({
        returnCode: 0,
        errMsg: 'success'
      })
    })
    .catch(next)
})

module.exports = router
