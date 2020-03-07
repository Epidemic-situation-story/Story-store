var router = require('express').Router()
var AV = require('leancloud-storage')
/**
 * @api {post} /file file
 * @apiDescription 文件上传
 * @apiParam {string} fileName 文件名称
 * @apiParam {string} fileType 文件类型
 * @apiParam {string} fileContent 文件内容(Base64编码)
 * @apiParam {string} uid 用户id
 * @apiGroup 文件
 * @apiSuccess {string} url 文件访问地址
 * @apiSuccess {string} id 文件id
 * @apiVersion 0.0.1
 */
router.post('/', (req, res, next) => {
  var params = req.body
  if (params.fileContent === undefined || params.fileContent.length === 0) {
    res.json({
      returnCode: -1,
      errMsg: '内容不能为空'
    })
  } else if (params.uid === undefined || params.uid.length === 0) {
    res.json({
      returnCode: -1,
      errMsg: '用户名标识不能为空'
    })
  } else {
    var uQuery = new AV.Query('_User')
    uQuery
      .get(params.uid)
      .then(u => {
        var file = new AV.File(params.fileName, { base64: params.fileContent })
        file
          .save()
          .then(f => {
            var jsonObj = f.toJSON()
            res.json({
              result: {
                url: jsonObj.url,
                id: f.id
              },
              returnCode: 0,
              errMsg: 'success'
            })
          })
          .catch(next)
      })
      .catch(next)
  }
})

module.exports = router
