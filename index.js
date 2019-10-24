const express = require('express')
const server = express()

server.use(express.json())

// Starting projects array with sample object

const projects = [
  {
    "id": "1",
    "title": "First",
    "tasks": []
  }
]

function findProjectFromId(req, res, next) {
  const { id } = req.params
  const project = projects.find(proj => proj.id === id)

  if (!project) {
    res.status(404).json({ error: "Project not found" })
  }

  return next()
}

function numberOfRequests(req, res, next) {

  console.count('Total de requisições até o momento')

  next()
}

server.use(numberOfRequests)

// Método POST que recebe um ID e um título vindos do corpo da requisição e os insere no array de projetos

server.post('/projects', (req, res) => {
  const { id } = req.body
  const { title } = req.body

  const newProject = { id, title, tasks: [] }

  projects.push(newProject)

  return res.json(newProject)
})

// Método GET que lista todos os projetos e suas tarefas

server.get('/projects', (req, res) => {
  return res.json(projects)
})

// Método PUT que altera o 'title' do projeto com base no ID passado nos parâmetros da rota

server.put('/projects/:id', findProjectFromId, (req, res) => {
  const { id } = req.params
  const { title } = req.body
  console.log(`Editing title from project number: ${id} to be ${title}`)

  // A conferência do ID também pode ser feita percorrendo o array com um forEach(), porém
  // a função find() faz a mesma coisa de forma mais simples, economizando linhas de código  

  const project = projects.find(proj => proj.id === id)

  project.title = title

  return res.json(project)
})

// Método DELETE que deleta o projeto com base no ID passado nos parâmetros da rota

server.delete('/projects/:id', findProjectFromId, (req, res) => {
  const { id } = req.params
  console.log(`Deleting project number: ${id}`)

  const project = projects.findIndex(proj => proj.id === id)

  projects.splice(project, 1)

  res.send()
})

// Método POST para armazenar novas tarefas no array de tarefas com base no ID passado nos parâmetros da rota

server.post('/projects/:id/tasks', findProjectFromId, (req, res) => {
  const { id } = req.params
  const { title } = req.body

  const project = projects.find(proj => proj.id === id)

  project.tasks.push(title)

  return res.json(project)
})

server.listen(3000)