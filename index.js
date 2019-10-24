const express = require('express')
const server = express()

server.use(express.json())

const projects = []

// Método POST que recebe um ID e um título vindos do corpo da requisição e os insere no array de projetos

server.post('/projects', (req, res) => {
  const { id } = req.body
  const { title } = req.body

  projects.push({ id, title })

  return res.json(projects)
})

// Método GET que lista todos os projetos e suas tarefas

server.get('/projects', (req, res) => {
  return res.json(projects)
})

// Método PUT que altera o 'title' do projeto com base no ID presente nos parâmetros da rota

server.put('/projects/:id', (req, res) => {
  const { id } = req.params
  const { title } = req.body
  console.log(`Editing title from project number: ${id} to be ${title}`)

  projects.forEach(project => {
    if (project.id === id) {
      project.title = title
    }
  })

  return res.json(projects)
})

server.listen(3000)