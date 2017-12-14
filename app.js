let express = require('express')
let app = express()
let fs = require('fs')

app.use(express.static('public'))

app.get('/newsList', function(req, res) {
  fs.readFile(__dirname + '/public/' + 'news.json', 'utf8', function(
    err,
    data,
  ) {
    if (err) {
      let errData = {
        status: 400,
        message: '数据接收失败',
      }
      res.end(errData)
    }
    res.end(data)
  })
})

let server = app.listen(3000, function() {
  let host = server.address().address
  let port = server.address().port

  console.log('监听地址：http://localhost:3000')
})
