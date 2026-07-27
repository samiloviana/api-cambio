import fs from "node:fs/promises"

async function cambio() {
    
const apiawesomeapi = await fetch("https://api.exchangerate.fun/latest?base=USD")
const dadosawesomeapi = await apiawesomeapi.json()

await fs.writeFile("cotacao.json", JSON.stringify(dadosawesomeapi))
console.log(dadosawesomeapi)

}

cambio()

setInterval(cambio, 3600000)