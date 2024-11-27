"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Guerreiro_1 = require("./Guerreiro");
var Mago_1 = require("./Mago");
var batalha = true;
var maguin1 = new Mago_1.Mago("Syndra");
var guerreiro1 = new Guerreiro_1.Guerreiro("Solaire");
while (batalha) {
    maguin1.atacar(guerreiro1);
    guerreiro1.atacar(maguin1);
    if (maguin1.getVida() <= 0) {
        console.log("\n----------------------------------------------------------------\n".concat(maguin1.getNome(), " perdeu pra ").concat(guerreiro1.getNome(), ".\n----------------------------------------------------------------\n        "));
        batalha = false;
    }
    else if (guerreiro1.getVida() <= 0) {
        console.log("\n----------------------------------------------------------------\n".concat(maguin1.getNome(), " perdeu pra ").concat(guerreiro1.getNome(), ".\n----------------------------------------------------------------\n        "));
        batalha = false;
    }
}
