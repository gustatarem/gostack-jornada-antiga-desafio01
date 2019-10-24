const express = require('express')
const server = express()

server.use(express.json())

const projects = []

// Método GET que lista todos os projetos e suas tarefas

server.get('/projects', (req, res) => {
  return res.json(projects)
})

// Método POST que recebe um ID e um título vindos do corpo da requisição e os insere no array de projetos

server.post('/projects', (req, res) => {
  const { id } = req.body
  const { title } = req.body

  projects.push({id, title})

  return res.json(projects)
})

server.listen(3000)