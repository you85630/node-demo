const express = require('express')
const app = express()
const api = require('./api')

app.use(api)

// 端口设为3000端口
app.set('port', process.env.port || 3000)

// CORS跨域配置
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*') // 这个表示任意域名都可以访问，这样写不能携带cookie了
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild',
  )
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS') // 设置方法
  if (req.method === 'OPTIONS') {
    res.send(200) // 在正常的请求之前， 发送一个验证， 是否可以请求
  } else {
    next()
  }
})

app.listen(app.get('port'), () => {
  console.log('服务器开启')
  console.log('http://localhost:' + app.get('port'))
})
