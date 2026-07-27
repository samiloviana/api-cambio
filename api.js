import fs from "node:fs/promises"

async function cambio() {
    
const pesquisaapi = await fetch("https://api.exchangerate.fun/latest?base=USD")
const dados = await pesquisaapi.json()

await fs.writeFile("cotacao.json", JSON.stringify(dados))
console.log(dados)

}

cambio()

setInterval(cambio, 3600000)