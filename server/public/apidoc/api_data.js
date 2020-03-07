define({ "api": [
  {
    "type": "get",
    "url": "/banner",
    "title": "banner",
    "group": "Banner",
    "version": "0.0.1",
    "description": "<p>获取首页banner图片</p>",
    "filename": "routes/banner.js",
    "groupTitle": "Banner",
    "name": "GetBanner"
  },
  {
    "type": "get",
    "url": "/test/hello",
    "title": "hello",
    "group": "测试",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n   returnCode: 0,\n   result: {\n     \"key\": \"value\"\n   },\n   errMsg: \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.1",
    "filename": "routes/test.js",
    "groupTitle": "测试",
    "name": "GetTestHello"
  },
  {
    "type": "post",
    "url": "/test/hello",
    "title": "hello(post)",
    "group": "测试",
    "version": "0.0.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n   returnCode: 0,\n   result: {\n     \"key\": \"value\"\n   },\n   errMsg: \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response",
          "content": "{\n   returnCode: -1,\n   errMsg: \"error message info\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/test.js",
    "groupTitle": "测试",
    "name": "PostTestHello"
  },
  {
    "type": "get",
    "url": "/user/phoneCode",
    "title": "phoneCode",
    "description": "<p>\b用户获取验证码</p>",
    "group": "用户",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号</p>"
          }
        ]
      }
    },
    "filename": "routes/user.js",
    "groupTitle": "用户",
    "name": "GetUserPhonecode"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "login",
    "description": "<p>用户登录</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pwd",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "group": "用户",
    "version": "0.0.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>头像</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "intro",
            "description": "<p>简介</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "labels",
            "description": "<p>标签(多个用逗号分割)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shareCount",
            "description": "<p>被转发次数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "troveCount",
            "description": "<p>被点赞次数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "balance",
            "description": "<p>余额</p>"
          }
        ]
      }
    },
    "filename": "routes/user.js",
    "groupTitle": "用户",
    "name": "PostUserLogin"
  },
  {
    "type": "post",
    "url": "/user/logout",
    "title": "logout",
    "description": "<p>用户注销</p>",
    "group": "用户",
    "version": "0.0.1",
    "filename": "routes/user.js",
    "groupTitle": "用户",
    "name": "PostUserLogout"
  }
] });