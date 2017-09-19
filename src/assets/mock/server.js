const DATA = require('./data')

function mockRunner (app) {
  console.log('||||||||||||||||||||');
  var baseUrl = 'https://hotel.utuapp.cn/ibs/manager/';
  app.get('/getMainMenu',function(req,res){
    console.log(req)
    res.send(DATA.getMainMenu)
  })
  app.get('/getSubMenu0',function(req,res){
    console.log(req)
    res.send(DATA.getSubMenu0)
  })
  app.get('/getSubMenu1',function(req,res){
    console.log(req)
    res.send(DATA.getSubMenu1)
  })
 app.get('/getSubMenu2',function(req,res){
   console.log(req)
   res.send(DATA,getSubMenu2)
 })
}

module.exports = mockRunner