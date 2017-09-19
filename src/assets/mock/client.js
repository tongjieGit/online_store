const Mock = require('mockjs')
const R = Mock.Random
module.exports = {
  getMainMenu: {
    success: true,
    message: "测试",
    code: 200,
    data: {
      itemsPerPage: 10, //每页记录条数
      context:{}, //上下文信息，目前没用到
      'items|5': [{
        'id|+1': 1,
      }]
    }
  },
  getSubMenu0: {
    success: true,
    message: "测试",
    code: 200,
    data: {
      itemsPerPage: 10, //每页记录条数
      context:{}, //上下文信息，目前没用到
      'items|5': [{
        'id|+1': 1,
      }]
    }
  },
  getSubMenu1: {
    success: true,
    message: "测试",
    code: 200,
    data: {
      itemsPerPage: 10, //每页记录条数
      context:{}, //上下文信息，目前没用到
      'items|5': [{
        'id|+1': 1,
      }]
    }
  },
  getSubMenu2: {
    success: true,
    message: "测试",
    code: 200,
    data: {
      itemsPerPage: 10, //每页记录条数
      context:{}, //上下文信息，目前没用到
      'items|5': [{
        'id|+1': 1,
      }]
    }
  }
}


