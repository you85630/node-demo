const express = require('express')
const app = express()
const api = require('./api')

app.use(api)

//端口设为3000端口
app.set('port', process.env.port || 3000)

//CORS跨域配置
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild',
  )
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
  if (req.method === 'OPTIONS') {
    res.sendStatus(200)
  } else {
    next()
  }
})

app.listen(app.get('port'), () => {
  console.log('服务器开启')
  console.log('http://localhost:' + app.get('port'))
})
