//importa o modulo express para criar o servidor e manipular notas
const express = require(`express`)

//importa o método uuidv4 da biblioteca uuid }(que gera um identificador único)
const { v4: uuidv4 } = require(`uuid`)

//cria um instancia do aplicativo express
const app = express()

//configurar o servidor para aceitar requisições com dados JSON no corpo 
app.use(express.json())

//array onde armazenamos temporariamente os projetos criados 
const projects = []

//middleware que registra as rotas e métodos das requisições no console
function logRoutes(request, response, next) {

    //extrai o método e a URL da requisição 
    const { method, url } = request

    //formata uma string com o método e URL
    const route = `][${method.toUpperCase()}]${url}`

    //exibe a string no console
    console.log(route)

    //executa o próximo middleware ou rota
    return next()
}

// habilita o uso do middleware de log de notas em todas as requisições

//rota para obter a lista de projetos
app.get(`/projects`, function (request, response) {
    //retorna o array de projetos como resposta em formato JSON 
    return response.json(projects)
})

//rota para adicionar um novo projeto, com middleware
app.post(`/projects`, logRoutes, function (request, response) {

    // extrair o nome e reponsável do corpo da requisição 
    const { nome, responsável } = request.body

    //cria um novo projeto com ID único, nome responsável
    const project = {
        id: uuidv4(),
        nome,
        responsável,
    }

    //adicionar o novo projeto ao array de projetos 
    projects.push(project)

    //restorna o projeto criado com o status 201 (criado)
    return response.status(201).json(project)
})

//rota para atualizar um projeto existente pelo `id`
app.put(`/projects/:id`, function (request, response) {

    //extrai o id dos parâmetros da URL
    const { id } = request.params

    //extrai o nome e o responsável do corpo da requisição 
    const { nome, responsável } = request.body

    //encontra o indice do projeto no array que tem o ID igual ao passado
    const projectIndex = projects.findIndex(p => p.id === id)

    //verifica se o projeto existe, se não, retorna um erro 404
    if (projectIndex < 0) {
        return response.status(404).json({ error: `Project no found` })
    }
    //verificar se o nome e responsável foram informados, se não, retorna um erro 400
    if (!nome || !responsável) {
        return response.status(400).json({ error: `Nome e responsável são necessários` })
    }

    //cria o novo objeto do projeto com os dados atualizados
    const project = {
        id,
        nome,
        responsável,
    }
    //atualizar o projeto dentro do array
    project[projectIndex] = project

    //retorna o projeto atualizado
    return response.json(project)
})

//rota para deletar um projeto via id 
app.delete(`/project/:id`, function (request, response) {

    //extrai o id dos parâmetros da URL
    const { id } = request.params

    //extrai o nome e o responsável do corpo da requisição 
    const { nome, responsável } = request.body

    //encontra o indice do projeto no array que tem o ID igual ao passado
    const projectIndex = projects.findIndex(p => p.id === id)

    //verifica se o projeto existe, se não, retorna um erro 404
    if (projectIndex < 0) {
        return response.status(404).json({ error: `Project no found` })
    }
    //verificar se o nome e responsável foram informados, se não, retorna um erro 400
    if (!nome || !responsável) {
        return response.status(400).json({ error: `Nome e responsável são necessários` })
    }

    //remove o projeto do array
    projects.splice(projectIndex,1)

    //retorna uma resposta com status 204(sem conteúdo)
    return response.status(204).send()

})

//confugyrando o servidor na porta respectiva
app.listen(3000, () => {
    console.log(`Servidor iniciado na porta 3000!😁`)
})