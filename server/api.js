const fs = require('fs')
const express = require('express')
const router = express.Router()
const path = require('path')
const bodyParser = require('body-parser')

// 创建 application/x-www-form-urlencoded 编码解析
const BParser = bodyParser.urlencoded({ extended: false })

// 路径
const resolve = file => path.resolve(__dirname, file)

router.get('/', function(req, res) {
  res.sendFile(resolve('./../index.html'))
})

router.get('/newsList', function(req, res) {
  fs.readFile(resolve('./../public/newsList.json'), 'utf8', function(
    err,
    data,
  ) {
    if (err) {
      let errData = {
        code: '400',
        message: '数据接收失败',
      }
      res.send(errData)
    } else {
      res.send(data)
    }
  })
})

router.post('/formPost', BParser, function(req, res) {
  let formData = {
    fname: req.body.fname,
    lname: req.body.lname,
  }
  res.send(formData)
})

module.exports = router
