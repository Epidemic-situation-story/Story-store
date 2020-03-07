var router = require('express').Router()
var AV = require('leancloud-storage')
var Story = AV.Object.extend('Story')

/**
 * @api {post} /story/list story(列表)
 * @apiDescription 故事列表
 * @apiGroup 故事
 * @apiParam {number} pageSize 每页条数(默认10)
 * @apiParam {number} currentPage 页数(默认1)
 * @apiParam {string} content 故事内容(选填)
 * @apiParam {string} uid 用户id(选填)
 * @apiSuccess {string} id 故事id
 * @apiSuccess {string} content 内容
 * @apiSuccess {number} comment 评论条数
 * @apiSuccess {number} like 点赞条数
 * @apiSuccess {date} createdAt 创建时间
 * @apiSuccess {date} updatedAt 修改时间
 * @apiVersion 0.0.1
 *
 */
router.post('/list', (req, res, next) => {
  var params = req.body
  var pageSize = 10
  var currentPage = 1
  var sq = new AV.Query('Story')
  if (params.pageSize !== undefined && Number(params.pageSize) !== 10)
    pageSize = Number(params.pageSize)
  if (params.currentPage !== undefined && Number(params.currentPage) > 1)
    currentPage = Number(params.currentPage)
  if (params.uid !== undefined && params.uid.length > 0) {
    sq.equalTo('user', AV.Object.createWithoutData('_User', params.uid))
  }
  if (params.content !== undefined && params.content.length > 0) {
    sq.contains('content', params.content)
  }
  sq.descending('updatedAt')
  sq.limit(pageSize)
  sq.skip((currentPage - 1) * pageSize)
  sq.find()
    .then(storys => {
      var arr = []
      storys.map(itm => {
        var obj = itm.toJSON()
        arr.push({
          id: obj.objectId,
          content: obj.content,
          createdAt: obj.createdAt,
          updatedAt: obj.updatedAt,
          comment: obj.commentCount,
          money: obj.money,
          like: obj.troveCount
        })
      })
      res.json({
        returnCode: 0,
        result: arr,
        errMsg: 'success'
      })
    })
    .catch(next)
})

/**
 * @api {post} /story story(创建)
 * @apiDescription 创建故事
 * @apiGroup 故事
 * @apiParam {string} content 故事内容(html字符串)
 * @apiParam {string} uid 用户id
 * @apiParam {number} money 售价(暂时为0)
 * @apiVersion 0.0.1
 */
router.post('/', (req, res, next) => {
  var params = req.body
  if (params.uid === undefined || params.uid.length === 0) {
    res.json({
      returnCode: -1,
      errMsg: '用户id不能为空'
    })
  } else if (params.content === undefined || params.content.length === 0) {
    res.json({
      returnCode: -1,
      errMsg: '故事内容不能为空'
    })
  } else {
    var uQuery = new AV.Query('_User')
    uQuery
      .get(params.uid)
      .then(user => {
        var story = new Story()
        story.set('content', params.content)
        story.set('user', user)
        story.set('money', 0)
        story
          .save()
          .then(() => {
            res.json({
              returnCode: 0,
              errMsg: 'success'
            })
          })
          .catch(next)
      })
      .catch(() => {
        res.json({
          returnCode: -1,
          errMsg: '用户不存在'
        })
      })
  }
})

/**
 * @api {put} /story story(修改)
 * @apiDescription 修改故事
 * @apiGroup 故事
 * @apiParam {string} content 内容
 * @apiParam {string} id 故事id
 * @apiParam {string} uid 用户id
 * @apiVersion 0.0.1
 */
router.put('/', (req, res, next) => {
  console.log('params:>>', req.body)
  var params = req.body
  if (params.content === undefined || params.content.length === 0) {
    res.json({
      returnCode: -1,
      errMsg: '内容不能为空'
    })
  } else if (params.id === undefined || params.id.length === 0) {
    res.json({
      returnCode: -1,
      errMsg: '故事id不能为空'
    })
  } else if (params.uid === undefined || params.uid.length === 0) {
    res.json({
      returnCode: -1,
      errMsg: '用户id不能为空'
    })
  } else {
    var uQuey = new AV.Query('_User')
    uQuey
      .get(params.uid)
      .then(u => {
        var sq = new AV.Query('Story')
        sq.get(params.id)
          .then(story => {
            story.set('content', params.content)
            story
              .save()
              .then(() => {
                res.json({
                  returnCode: 0,
                  errMsg: 'success'
                })
              })
              .catch(next)
          })
          .catch(next)
      })
      .catch(next)
  }
})

/**
 * @api {delete} /story/:id story(删除)
 * @apiDescription 删除故事
 * @apiGroup 故事
 * @apiParam {string} id 故事id
 * @apiVersion 0.0.1
 */
router.delete('/:id', (req, res, next) => {
  var id = req.params.id || ''
  if (id === undefined || id.length === 0) {
    res.json({
      returnCode: -1,
      errMsg: '故事id不能为空'
    })
  } else {
    var sq = new AV.Query('Story')
    sq.get(id)
      .then(story => {
        story
          .destroy()
          .then(() => {
            res.json({
              returnCode: 0,
              errMsg: 'success'
            })
          })
          .catch(next)
      })
      .catch(() => {
        res.json({ returnCode: -1, errMsg: 'id不存在' })
      })
  }
})

module.exports = router
