const fs = require('fs')
const express = require('express')
const router = express.Router()
const path = require('path')

const resolve = file => path.resolve(__dirname, file)

router.get('/', function(req, res) {
  res.send('Hello World!')
})

router.get('/newsList', function(req, res) {
  fs.readFile(resolve('newsList.json'), 'utf8', function(err, data) {
    if (err) {
      let errData = {
        code: '400',
        message: '数据接收失败',
      }
      res.send(errData)
    } else {
      res.send(data.toString())
    }
  })
})

module.exports = router
