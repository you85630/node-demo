const mongoose = require('mongoose')
const db = mongoose.connect('mongodb://127.0.0.1:27017/nodeDemo')

db.connection.on('error', error => {
  console.log('数据库连接失败：' + error)
})
db.connection.on('open', () => {
  console.log('数据库连接成功')
})

const newsSchema = new mongoose.Schema({
  media: String,
  medium_title: String,
  score: { type: Number, default: 0 },
  id: { type: Number, default: 0 },
})

const Model = {
  newsList: mongoose.model('newsList', newsSchema),
}

module.exports = Model
