const express = require('express')
const path = require('path')
const router = express.Router()
const db = require('./db')

// 路径
const resolve = file => path.resolve(__dirname, file)

router.get('/', function(req, res) {
  res.sendFile(resolve('./../index.html'))
})

router.get('/newsList', (req, res) => {
  db.newsList.find({}, (err, doc) => {
    if (err) {
      res.send(err)
    } else {
      res.send(doc)
    }
  })
})

module.exports = router
