import { Personagem } from "./Personagem"
import { Guerreiro } from "./Guerreiro"
import { Mago } from "./Mago"

let batalha: boolean = true

let maguin1 = new Mago("Syndra")
let guerreiro1 = new Guerreiro("Solaire")

while (batalha) {
    maguin1.atacar(guerreiro1)
    guerreiro1.atacar(maguin1)

    if (maguin1.getVida() <= 0) {
        console.log(`
----------------------------------------------------------------
${maguin1.getNome()} perdeu pra ${guerreiro1.getNome()}.
----------------------------------------------------------------
        `)
        batalha = false
    } else if (guerreiro1.getVida() <= 0) {
        console.log(`
----------------------------------------------------------------
${maguin1.getNome()} perdeu pra ${guerreiro1.getNome()}.
----------------------------------------------------------------
        `)
        batalha = false
    }
}