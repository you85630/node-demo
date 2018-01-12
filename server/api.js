const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
const db = require('./db')

// 创建 application/x-www-form-urlencoded 编码解析
const urlencodedParser = bodyParser.urlencoded({
  extended: false,
})

// 查询
router.get('/List', (req, res) => {
  db.List.find({}, (err, doc) => {
    if (err) {
      res.send(err)
    } else {
      res.send(doc)
    }
  })
})

// 增加
router.post('/List', urlencodedParser, function(req, res) {
  const inputList = [
    {
      name: req.body.label_name,
      age: req.body.label_age,
      year: req.body.label_year,
    },
  ]
  db.List.create(inputList, err => {
    if (err) {
      res.send(err)
    } else {
      res.send()
    }
  })
})

module.exports = router
