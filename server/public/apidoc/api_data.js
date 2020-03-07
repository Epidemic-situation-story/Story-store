define({ "api": [
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
    "version": "0.0.0",
    "filename": "routes/test.js",
    "groupTitle": "测试",
    "name": "GetTestHello"
  },
  {
    "type": "post",
    "url": "/test/hello",
    "title": "hello(post)",
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
    "version": "0.0.0",
    "filename": "routes/test.js",
    "groupTitle": "测试",
    "name": "PostTestHello"
  }
] });
