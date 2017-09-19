const Mock = require('mockjs')
const client = require('./client')

const resolve = {}

for (method in client) {
  resolve[method] = Mock.mock(client[method])
}

module.exports = resolve
