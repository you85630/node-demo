const express = require('express')
const app = express()
const api = require('./api')

app.use(api)

app.listen(3000)
