const express = require("express")
// importar o cors, e colocar dentro de uma variavel
const cors = require("cors")
// criar uma constante chamada app, ela chama a funçao express, fazendo ele funcionar
const app = express()
// configurar API
// body-parser, pelo app, utilizando o metodo use, e vai chamar o express.json
app.use(express.json())
// depois configurar acessando o metodo use pelo app, chamando o cors
app.use(cors())

// exportar o modulo app
module.exports = app