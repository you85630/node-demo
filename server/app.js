const express = require('express')
const path = require('path')
const api = require('./api')
const app = express()

// 端口设为3000端口
app.set('port', process.env.port || 3000)

// CORS跨域配置
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild',
  )
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
  if (req.method === 'OPTIONS') {
    res.send(200)
  } else {
    next()
  }
})

app.use(api)

// 路径
const resolve = file => path.resolve(__dirname, file)

app.get('/', function(req, res) {
  res.sendFile(resolve('./../index.html'))
})

app.listen(app.get('port'), () => {
  console.log('服务器开启：http://localhost:' + app.get('port'))
})
