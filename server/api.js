const express = require('express')
const fs = require('fs')
const router = express.Router()

router.get('/', function(req, res) {
  res.send('Hello World!')
})

router.get('/newsList', function(req, res) {
  let newsList = fs.readFile('./../public/newsList.json', function(err, data) {
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
