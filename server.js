//importar o modulo express
const express = require(`express`)

//cria uma aplicação express (nosso servidor)
const app = express()

//definir a porta que o servidor vai usar
const PORT = 5000

//falar ao express para servir arquivos estáticos da pasta "public"
app.use(express.static(`public`))

//iniciaro o servidor na porta 5000
app.listen(PORT, () => {
    console.log(`Servidor ininciado em http://localhost:${PORT}`)
})

