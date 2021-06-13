const http = require('http')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const blogRouter = require('./controllers/blogs')
require('dotenv').config()

const mongoUrl = process.env.MONGODB_URI
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})

app.use(cors())
app.use(express.json())
app.use('/api/blogs', blogRouter)

const PORT = 3003
const server = http.createServer(app)
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
