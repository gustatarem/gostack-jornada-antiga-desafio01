const express = require('express')
const server = express()

server.use(express.json())

server.get('/projects', (req, res) => {
  return res.json({ hello: "world" })
})

server.listen(3000)