import fs from "node:fs/promises"

async function cambio() {
    
const pesquisaapi = await fetch("https://v6.exchangerate-api.com/v6/1015227165fabdcf141f7bf2/latest/USD")
const dados = await pesquisaapi.json()

await fs.writeFile("cotacao.json", JSON.stringify(dados))
console.log(dados)

}

cambio()

setInterval(cambio, 3600000)