var router = require('express').Router()
var AV = require('leancloud-storage')
var Comment = AV.Object.extend('Comment')
/**
 * @api {get} /comment comment(列表)
 * @apiDescription 评论列表
 * @apiGroup 评论
 * @apiParam {string} sid 故事id
 * @apiParam {number} currentPage 页数(默认1)
 * @apiParam {number} pageSize 每页条数(默认10)
 * @apiVersion 0.0.1
 * @apiSuccess {string} id 评论id
 * @apiSuccess {string} avatar 评论者头像
 * @apiSuccess {string} name 评论者名字
 * @apiSuccess {string} content 评论内容
 * @apiSuccess {date} createdAt 评论日期
 */
router.get('/', (req, res, next) => {
  var id = req.query.sid || ''
  if (id === undefined || id.length === 0) {
    res.json({
      returnCode: -1,
      errMsg: '故事id不能为空'
    })
  } else {
    var currentPage = 1
    var pageSize = 10
    if (req.query.pageSize !== undefined && Number(req.query.pageSize) !== 10)
      pageSize = Number(req.query.pageSize)
    if (
      req.query.currentPage !== undefined &&
      Number(req.query.currentPage) !== 10
    )
      currentPage = Number(req.query.currentPage)
    var story = AV.Object.createWithoutData('Story', id)
    var commentQuery = new AV.Query('Comment')
    commentQuery.equalTo('story', story)
    commentQuery.limit(pageSize)
    commentQuery.skip((currentPage - 1) * pageSize)
    commentQuery.descending('createdAt')
    commentQuery
      .find()
      .then(comms => {
        var arr = []
        comms.map(itm => {
          var obj = itm.toJSON()
          arr.push({
            id: obj.objectId,
            avatar: obj.avatar || '暂无',
            name: obj.name,
            content: obj.content,
            createdAt: obj.createdAt
          })
        })
        res.json({
          returnCode: 0,
          result: arr,
          errMsg: 'success'
        })
      })
      .catch(next)
  }
})

/**
 * @api {post} /comment comment(评论)
 * @apiDescription 用户评论
 * @apiGroup 评论
 * @apiParam {string} uid 用户id
 * @apiParam {string} content 评论内容
 * @apiParam {string} sid 故事id
 * @apiVersion 0.0.1
 */
router.post('/', (req, res, next) => {
  var params = req.body
  if (params.uid === undefined || params.uid.length === 0) {
    res.json({
      returnCode: -1,
      errMsg: '用户id不能为空'
    })
  } else if (params.sid === undefined || params.sid.length === 0) {
    res.json({
      returnCode: -1,
      errMsg: '故事id不能为空'
    })
  } else if (params.content === undefined || params.content.length === 0) {
    res.json({
      returnCode: -1,
      errMsg: '评论内容不能为空'
    })
  } else {
    var uq = new AV.Query('_User')
    uq.get(params.uid)
      .then(u => {
        var sq = new AV.Query('Story')
        sq.get(params.sid)
          .then(story => {
            var pq = new AV.Query('Profile')
            pq.equalTo('user', u)
            pq.first()
              .then(profile => {
                var obj = profile.toJSON()
                var comm = new Comment()
                comm.set('user', u)
                comm.set('name', u.getUsername())
                comm.set('content', params.content)
                comm.set('avatar', obj.avatar)
                comm.set('story', story)
                comm
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
      })
      .catch(next)
  }
})
module.exports = router
