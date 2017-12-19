const mongoose = require('mongoose')
const Schema = mongoose.Schema
const db = mongoose.connection

const newsSchema = new mongoose.Schema({
  name: String,
  age: { type: Number, default: 0 },
  time: { type: Number, default: 0 },
})

//连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/nodeDemo', {
  useMongoClient: true,
})

db.on('error', () => {
  console.log('数据库连接出错' + error)
})

db.once('open', () => {
  console.log('数据库已连接')
})

const Model = {
  newsList: mongoose.model('newsList', newsSchema),
}

module.exports = Model
