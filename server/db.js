const mongoose = require('mongoose')
const db = mongoose.connection

const newsSchema = new mongoose.Schema({
  name: String,
  age: Number,
  year: Date,
})

//连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/nodeDemo', {
  useMongoClient: true,
})

db.on('error', () => {
  console.log('数据库连接出错')
})

db.once('open', () => {
  console.log('数据库已连接')
})

const Model = {
  newsList: mongoose.model('newsList', newsSchema),
}

module.exports = Model
