const ask = require("readline-sync")

import { Personagem } from "./Personagem";
import { Ryu } from "./Ryu";
import { Ken } from "./Ken";
import { Blanka } from "./Blanka";
import { Zangief } from "./Zangief";
import { Honda } from "./Honda";
import { Bison } from "./Bison";
import { Cammy } from "./Cammy";
import { DeeJay } from "./DeeJay";

let Personagem1: Personagem = new Ryu("Ryu", 1000, "", "")
let Personagem2: Personagem = new Ken("Ken", 1000, "", "")
let Personagem3: Personagem = new Blanka("Blanka", 1000, "", "")
let Personagem4: Personagem = new Zangief("Zangief", 1000, "", "")
let Personagem5: Personagem = new Honda("Honda", 1000, "", "")
let Personagem6: Personagem = new Bison("Bison", 1000, "", "")
let Personagem7: Personagem = new Cammy("Cammy", 1000, "", "")
let Personagem8: Personagem = new DeeJay("Dee Jay", 1000, "", "")

function batalhar(per1: Personagem, per2: Personagem): void {
    let batalhando: boolean = true
    let turno: number = 1
    while (batalhando) {
        console.clear()
        console.log(`
============ Turno ${turno} ============`)
console.log(`
Player 1:`)
        let escolha1: number = Number(ask.question(`
1 = Golpe Leve
2 = Golpe Pesado
3 = Golpe Especial (So pode ser usado uma vez apos a barra especial carregar)
Qual golpe voce quer usar? `))
        switch (escolha1) {
            case 1:
                console.log(`O Player 1 (${per1.getNome()} usou um golpe leve.)`)
                per1.setBarraEspecial(+1)
                per1.golpeLeve()
                break
            case 2:
                console.log(`O Player 1 (${per1.getNome()} usou um golpe pesado.)`)
                per1.setBarraEspecial(+2)
                per1.golpePesado()
                break
            case 3:
                console.log(`O Player 1 (${per1.getNome()} usou um golpe ESPECIAL.)`)
                per1.setPodeEspecial(false)
                per1.setBarraEspecial(0)
                per1.golpeEspecial()
                break
            default:
                console.log(`Você digitou um comando invalido, Seu turno foi pulado 🤣`)
                break
        }
        if (per1.getPodeEspecial() === true) {
            console.log(`Player 1: Barra de Especial = ${per1.getBarraEpecial()}`)
        }
        console.log(`
Player 1:`)
        let escolha2: number = Number(ask.question(`

1 = Golpe Leve
2 = Golpe Pesado
3 = Golpe Especial (So pode ser usado uma vez apos a barra especial carregar)
Qual golpe voce quer usar? `))
        switch (escolha2) {
            case 1:
                console.log(`O Player 2 (${per2.getNome()}) usou um golpe leve.`)
                per1.setBarraEspecial(+1)
                per1.golpeLeve()
                break
            case 2:
                console.log(`O Player 2 (${per2.getNome()}) usou um golpe pesado.`)
                per1.setBarraEspecial(+2)
                per1.golpePesado()
                break
            case 3:
                console.log(`O Player 2 (${per2.getNome()}) usou um golpe ESPECIAL.`)
                per1.setPodeEspecial(false)
                per1.setBarraEspecial(0)
                per1.golpeEspecial()
                break
            default:
                console.log(`Você digitou um comando invalido, Seu turno foi pulado 🤣`)
                break
        }
        if (per2.getPodeEspecial() === true) {
            console.log(`Player 2: Barra de Especial = ${per2.getBarraEpecial()}`)
        }
        turno++
        console.log(`
========================================`)
    }
}
console.clear()
console.log(`
============= Personagens =============
[1] = Ryu
[2] = Ken
[3] = Blanka
[4] = Zangief
[5] = Honda
[6] = Bison
[7] = Cammy
[8] = Deejay
`)
let per1
let player1: number = Number(ask.question(`Player 1: `))

switch (player1) {
    case 1:
        per1 = Personagem1
        break
    case 2:
        per1 = Personagem2
        break
    case 3:
        per1 = Personagem3
        break
    case 4:
        per1 = Personagem4
        break
    case 5:
        per1 = Personagem5
        break
    case 6:
        per1 = Personagem6
        break
    case 7:
        per1 = Personagem7
        break
    case 8:
        per1 = Personagem8
        break
}
console.clear()
console.log(`
============= Personagens =============
[1] = Ryu
[2] = Ken
[3] = Blanka
[4] = Zangief
[5] = Honda
[6] = Bison
[7] = Cammy
[8] = Deejay
`)
let per2
let player2: number = Number(ask.question(`Player 2: `))
switch (player2) {
    case 1:
        per2 = Personagem1
        break
    case 2:
        per2 = Personagem2
        break
    case 3:
        per2 = Personagem3
        break
    case 4:
        per2 = Personagem4
        break
    case 5:
        per2 = Personagem5
        break
    case 6:
        per2 = Personagem6
        break
    case 7:
        per2 = Personagem7
        break
    case 8:
        per2 = Personagem8
        break
}

batalhar(per1, per2)