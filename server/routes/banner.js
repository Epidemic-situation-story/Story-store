var router = require('express').Router()
var AV = require('leancloud-storage')
/**
 * @api {get} /banner banner
 * @apiGroup Banner
 * @apiVersion 0.0.1
 * @apiDescription 获取首页banner图片
 */
router.get('/', function(req, res, next) {
  var query = new AV.Query('Banner')
  query
    .find()
    .then(function(banners) {
      res.json({
        returnCode: 0,
        result: banners.map(itm => itm.get('url')),
        errMsg: 'success'
      })
    })
    .catch(next)
})

module.exports = router
