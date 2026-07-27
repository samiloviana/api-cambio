import http from "node:http"
import fs from "node:fs/promises"
const porta = 3000

const server = http.createServer( async(req, res) => {
    if(req.url === "/moedas") {
    
    const dados = await fs.readFile("cotacao.json")
    res.statusCode = 200
    res.setHeader("Content-Type", "application/json")
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.end(dados)
    } return
})


server.listen(porta, () => {
    console.log(`Servidor rodndo na porta ${porta}`)
})