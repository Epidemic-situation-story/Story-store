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
    "type": "delete",
    "url": "/story/:id",
    "title": "story(删除)",
    "description": "<p>删除故事</p>",
    "group": "故事",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>故事id</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "routes/story.js",
    "groupTitle": "故事",
    "name": "DeleteStoryId"
  },
  {
    "type": "post",
    "url": "/story",
    "title": "story(创建)",
    "description": "<p>创建故事</p>",
    "group": "故事",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>故事内容(html字符串)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "uid",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "money",
            "description": "<p>售价(暂时为0)</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "routes/story.js",
    "groupTitle": "故事",
    "name": "PostStory"
  },
  {
    "type": "post",
    "url": "/story/list",
    "title": "story(列表)",
    "description": "<p>故事列表</p>",
    "group": "故事",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页条数(默认10)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "currentPage",
            "description": "<p>页数(默认1)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>故事内容(选填)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "uid",
            "description": "<p>用户id(选填)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>故事id</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>内容</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "comment",
            "description": "<p>评论条数</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "like",
            "description": "<p>点赞条数</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>修改时间</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "routes/story.js",
    "groupTitle": "故事",
    "name": "PostStoryList"
  },
  {
    "type": "put",
    "url": "/story",
    "title": "story(修改)",
    "description": "<p>修改故事</p>",
    "group": "故事",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>故事id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "uid",
            "description": "<p>用户id</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "routes/story.js",
    "groupTitle": "故事",
    "name": "PutStory"
  },
  {
    "type": "post",
    "url": "/file",
    "title": "file",
    "description": "<p>文件上传</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "fileName",
            "description": "<p>文件名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "fileType",
            "description": "<p>文件类型</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "fileContent",
            "description": "<p>文件内容(Base64编码)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "uid",
            "description": "<p>用户id</p>"
          }
        ]
      }
    },
    "group": "文件",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "url",
            "description": "<p>文件访问地址</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>文件id</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "routes/file.js",
    "groupTitle": "文件",
    "name": "PostFile"
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
            "type": "string",
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
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
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
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "avatar",
            "description": "<p>头像</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "intro",
            "description": "<p>简介</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "labels",
            "description": "<p>标签(多个用逗号分割)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "shareCount",
            "description": "<p>被转发次数</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "troveCount",
            "description": "<p>被点赞次数</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
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
  },
  {
    "type": "get",
    "url": "/comment",
    "title": "comment(列表)",
    "description": "<p>评论列表</p>",
    "group": "评论",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sid",
            "description": "<p>故事id</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "currentPage",
            "description": "<p>页数(默认1)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页条数(默认10)</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>评论id</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "avatar",
            "description": "<p>评论者头像</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>评论者名字</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>评论内容</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>评论日期</p>"
          }
        ]
      }
    },
    "filename": "routes/comment.js",
    "groupTitle": "评论",
    "name": "GetComment"
  },
  {
    "type": "post",
    "url": "/comment",
    "title": "comment(评论)",
    "description": "<p>用户评论</p>",
    "group": "评论",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "uid",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>评论内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sid",
            "description": "<p>故事id</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "routes/comment.js",
    "groupTitle": "评论",
    "name": "PostComment"
  }
] });
