var router = require('express').Router()
/**
 * @api {get} /test/hello hello
 * @apiGroup 测试
 * @apiSuccess {json} result
 * @apiVersion 0.0.1
 * @apiSuccessExample {json} Success-Response
 * {
 *    returnCode: 0,
 *    result: {
 *      "key": "value"
 *    },
 *    errMsg: "success"
 * }
 */
router.get('/hello', function(req, res, next) {
  res.json({
    returnCode: 0,
    result: { msg: 'hello world test' },
    errMsg: 'success'
  })
})

/**
 * @api {post} /test/hello hello(post)
 * @apiGroup 测试
 * @apiVersion 0.0.1
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response
 * {
 *    returnCode: 0,
 *    result: {
 *      "key": "value"
 *    },
 *    errMsg: "success"
 * }
 * @apiError {json} result
 * @apiErrorExample {json} Error-Response
 * {
 *    returnCode: -1,
 *    errMsg: "error message info"
 *}
 *
 */
router.post('/hello', function(req, res, next) {
  res.json({
    returnCode: 0,
    result: req.body,
    errMsg: 'success'
  })
})
module.exports = router
