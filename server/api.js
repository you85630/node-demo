const express = require('express')
const router = express.Router()
const db = require('./db')

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
