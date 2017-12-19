const fs = require('fs')
const path = require('path')
const express = require('express')
const router = express.Router()
const db = require('./db')

// 路径
const resolve = file => path.resolve(__dirname, file)

router.get('/', function (req, res) {
  res.sendFile(resolve('./../index.html'))
})

router.get('/newsList', (req, res) => {
  db.posts.find((err, doc) => {
    if (err) {
      let errData = {
        code: '400',
        message: '数据接收失败',
      }
      res.send(errData)
      return
    } else {
      console.log(data)
      res.send(data)
    }
  })
})

module.exports = router
