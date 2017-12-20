const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
const db = require('./db')

// 创建 application/x-www-form-urlencoded 编码解析
const urlencodedParser = bodyParser.urlencoded({
  extended: false,
})

// 查询
router.get('/newsList', (req, res) => {
  db.newsList.find({}, (err, doc) => {
    if (err) {
      res.send(err)
    } else {
      res.send(doc)
    }
  })
})

// 增加
router.post('/newsList', urlencodedParser, function(req, res) {
  const inputList = [
    {
      name: req.body.label_name,
      age: req.body.label_age,
      year: req.body.label_year,
    },
  ]
  db.newsList.create(inputList, err => {
    if (err) {
      res.send(err)
    } else {
      res.send(inputList)
    }
  })
})

module.exports = router
