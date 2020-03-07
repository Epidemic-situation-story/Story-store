//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    banner: ['../../image/banner.png', '../../image/banner.png', '../../image/banner.png', '../../image/banner.png'],
    newsstoryList:[{
      pic:'../../image/banner.png',
      author:' author',
      id:1,
      praise:5,
      comments:10,
      love:50,
      Introduce:'鼠年春节，我的旅程因新冠疫情变得离奇。加勒比邮轮行，碧海蓝天、美食、海岛……张张美图直击心灵，经过2晚斗争，我和朋友终于拿下年三十去美国的机票，准备2月第一周登上梦。。。。'
    }],
    allstoryList: [{
      pic: '../../image/banner.png',
      author: ' author',
      id: 1,
      praise: 5,
      comments: 10,
      love: 50,
      Introduce: '鼠年春节，我的旅程因新冠疫情变得离奇。加勒比邮轮行，碧海蓝天、美食、海岛……张张美图直击心灵，经过2晚斗争，我和朋友终于拿下年三十去美国的机票，准备2月第一周登上梦。。。。'
    }, {
        pic: '../../image/banner.png',
        author: ' author',
        id: 1,
        praise: 5,
        comments: 10,
        love: 50,
        Introduce: '鼠年春节，我的旅程因新冠疫情变得离奇。加勒比邮轮行，碧海蓝天、美食、海岛……张张美图直击心灵，经过2晚斗争，我和朋友终于拿下年三十去美国的机票，准备2月第一周登上梦。。。。'
      }, {
        pic: '../../image/banner.png',
        author: ' author',
        id: 1,
        praise: 5,
        comments: 10,
        love: 50,
        Introduce: '鼠年春节，我的旅程因新冠疫情变得离奇。加勒比邮轮行，碧海蓝天、美食、海岛……张张美图直击心灵，经过2晚斗争，我和朋友终于拿下年三十去美国的机票，准备2月第一周登上梦。。。。'
      }, {
        pic: '../../image/banner.png',
        author: ' author',
        id: 1,
        praise: 5,
        comments: 10,
        love: 50,
        Introduce: '鼠年春节，我的旅程因新冠疫情变得离奇。加勒比邮轮行，碧海蓝天、美食、海岛……张张美图直击心灵，经过2晚斗争，我和朋友终于拿下年三十去美国的机票，准备2月第一周登上梦。。。。'
      }, {
        pic: '../../image/banner.png',
        author: ' author',
        id: 1,
        praise: 5,
        comments: 10,
        love: 50,
        Introduce: '鼠年春节，我的旅程因新冠疫情变得离奇。加勒比邮轮行，碧海蓝天、美食、海岛……张张美图直击心灵，经过2晚斗争，我和朋友终于拿下年三十去美国的机票，准备2月第一周登上梦。。。。'
      }, {
        pic: '../../image/banner.png',
        author: ' author',
        id: 1,
        praise: 5,
        comments: 10,
        love: 50,
        Introduce: '鼠年春节，我的旅程因新冠疫情变得离奇。加勒比邮轮行，碧海蓝天、美食、海岛……张张美图直击心灵，经过2晚斗争，我和朋友终于拿下年三十去美国的机票，准备2月第一周登上梦。。。。'
      }]
  },
  //事件处理函数

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
