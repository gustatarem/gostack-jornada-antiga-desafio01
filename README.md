<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>

<h3 align="center">
  Desafio 1: Conceitos do NodeJS
</h3>

## :rocket: Desafio

Aplicação para armazenar projetos e suas tarefas do zero utilizando [Express](https://expressjs.com/pt-br/).

### Rotas

- `POST /projects`: A rota recebe `id` e `title` dentro do corpo e cadastrar um novo projeto dentro de um array no seguinte formato: `{ id: "1", title: 'Novo projeto', tasks: [] }`;

- `GET /projects`: Rota que lista todos projetos e suas tarefas;

- `PUT /projects/:id`: Rota que altera apenas o título do projeto com o `id` presente nos parâmetros da rota;

- `DELETE /projects/:id`: Rota que deleta o projeto com o `id` presente nos parâmetros da rota;

- `POST /projects/:id/tasks`: Rota que recebe um campo `title` e armazenar uma nova tarefa no array de tarefas de um projeto específico escolhido através do `id` presente nos parâmetros da rota;

### Middlewares

- Middleware 1: integrado a todas as rotas que recebem o ID do projeto nos parâmetros da URL para verificar se o projeto com aquele ID realmente existe, caso não exista retornará um erro.

- Middleware 2: global, imprime um (`console.log`) com a contagem de quantas requisições foram feitas na aplicação até então.

## Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---
