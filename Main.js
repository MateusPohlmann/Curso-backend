"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ask = require("readline-sync");
var Ryu_1 = require("./Ryu");
var Ken_1 = require("./Ken");
var Blanka_1 = require("./Blanka");
var Zangief_1 = require("./Zangief");
var Honda_1 = require("./Honda");
var Bison_1 = require("./Bison");
var Cammy_1 = require("./Cammy");
var DeeJay_1 = require("./DeeJay");
var Personagem1 = new Ryu_1.Ryu("Ryu", 1000, "", "");
var Personagem2 = new Ken_1.Ken("Ken", 1000, "", "");
var Personagem3 = new Blanka_1.Blanka("Blanka", 1000, "", "");
var Personagem4 = new Zangief_1.Zangief("Zangief", 1000, "", "");
var Personagem5 = new Honda_1.Honda("Honda", 1000, "", "");
var Personagem6 = new Bison_1.Bison("Bison", 1000, "", "");
var Personagem7 = new Cammy_1.Cammy("Cammy", 1000, "", "");
var Personagem8 = new DeeJay_1.DeeJay("Dee Jay", 1000, "", "");
function batalhar(per1, per2) {
    var batalhando = true;
    var turno = 1;
    while (batalhando) {
        console.clear();
        console.log("\n============ Turno ".concat(turno, " ============"));
        var escolha1 = Number(ask.question("\n1 = Golpe Leve\n2 = Golpe Pesado\n3 = Golpe Especial (So pode ser usado uma vez apos a barra especial carregar)\nQual golpe voce quer usar? "));
        switch (escolha1) {
            case 1:
                console.log("O Player 1 (".concat(per1.getNome(), " usou um golpe leve.)"));
                per1.setBarraEspecial(+1);
                per1.golpeLeve();
                break;
            case 2:
                console.log("O Player 1 (".concat(per1.getNome(), " usou um golpe pesado.)"));
                per1.setBarraEspecial(+2);
                per1.golpePesado();
                break;
            case 3:
                console.log("O Player 1 (".concat(per1.getNome(), " usou um golpe ESPECIAL.)"));
                per1.setPodeEspecial(false);
                per1.setBarraEspecial(0);
                per1.golpeEspecial();
                break;
            default:
                console.log("Voc\u00EA digitou um comando invalido, Seu turno foi pulado \uD83E\uDD23");
                break;
        }
        if (per1.getPodeEspecial() === true) {
            console.log("Player 1: Barra de Especial = ".concat(per1.getBarraEpecial()));
        }
        var escolha2 = Number(ask.question("\n1 = Golpe Leve\n2 = Golpe Pesado\n3 = Golpe Especial (So pode ser usado uma vez apos a barra especial carregar)\nQual golpe voce quer usar? "));
        switch (escolha2) {
            case 1:
                console.log("O Player 2 (".concat(per2.getNome(), ") usou um golpe leve."));
                per1.setBarraEspecial(+1);
                per1.golpeLeve();
                break;
            case 2:
                console.log("O Player 2 (".concat(per2.getNome(), ") usou um golpe pesado."));
                per1.setBarraEspecial(+2);
                per1.golpePesado();
                break;
            case 3:
                console.log("O Player 2 (".concat(per2.getNome(), ") usou um golpe ESPECIAL."));
                per1.setPodeEspecial(false);
                per1.setBarraEspecial(0);
                per1.golpeEspecial();
                break;
            default:
                console.log("Voc\u00EA digitou um comando invalido, Seu turno foi pulado \uD83E\uDD23");
                break;
        }
        if (per2.getPodeEspecial() === true) {
            console.log("Player 2: Barra de Especial = ".concat(per2.getBarraEpecial()));
        }
        turno++;
        console.log("\n========================================");
    }
}
console.clear();
console.log("\n============= Personagens =============\n[1] = Ryu\n[2] = Ken\n[3] = Blanka\n[4] = Zangief\n[5] = Honda\n[6] = Bison\n[7] = Cammy\n[8] = Deejay\n");
var per1;
var player1 = Number(ask.question("Player 1: "));
switch (player1) {
    case 1:
        per1 = Personagem1;
        break;
    case 2:
        per1 = Personagem2;
        break;
    case 3:
        per1 = Personagem3;
        break;
    case 4:
        per1 = Personagem4;
        break;
    case 5:
        per1 = Personagem5;
        break;
    case 6:
        per1 = Personagem6;
        break;
    case 7:
        per1 = Personagem7;
        break;
    case 8:
        per1 = Personagem8;
        break;
}
console.clear();
console.log("\n============= Personagens =============\n[1] = Ryu\n[2] = Ken\n[3] = Blanka\n[4] = Zangief\n[5] = Honda\n[6] = Bison\n[7] = Cammy\n[8] = Deejay\n");
var per2;
var player2 = Number(ask.question("Player 2: "));
switch (player2) {
    case 1:
        per2 = Personagem1;
        break;
    case 2:
        per2 = Personagem2;
        break;
    case 3:
        per2 = Personagem3;
        break;
    case 4:
        per2 = Personagem4;
        break;
    case 5:
        per2 = Personagem5;
        break;
    case 6:
        per2 = Personagem6;
        break;
    case 7:
        per2 = Personagem7;
        break;
    case 8:
        per2 = Personagem8;
        break;
}
batalhar(per1, per2);
