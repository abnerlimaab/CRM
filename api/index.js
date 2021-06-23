const express = require('express')

const app = express()

app.use(express.json())

const port = 3000

app.get('/test', (req, res) => res
    .status(200)
    .send({ mensagem: 'Boas vindas ao CRM' })
)

app.listen(port, () => console.log(`O servidor está rodando na porta ${port}`))

module.exports = app