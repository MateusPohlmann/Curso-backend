"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeeJay = void 0;
var DeeJay = /** @class */ (function () {
    function DeeJay(nome, vida, nacionalidade, estiloLuta) {
        this.podeEspecial = true;
        this.nome = nome;
        this.vida = vida;
        this.nacionalidade = nacionalidade;
        this.estiloLuta = estiloLuta;
    }
    DeeJay.prototype.getNome = function () {
        return this.nome;
    };
    DeeJay.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    DeeJay.prototype.getVida = function () {
        return this.vida;
    };
    DeeJay.prototype.setVida = function (vida) {
        this.vida = vida;
    };
    DeeJay.prototype.getNacio = function () {
        return this.nacionalidade;
    };
    DeeJay.prototype.setNacio = function (nacio) {
        this.nacionalidade = nacio;
    };
    DeeJay.prototype.getEstiloLuta = function () {
        return this.estiloLuta;
    };
    DeeJay.prototype.setEstiloLuta = function (estiloLuta) {
        this.estiloLuta = estiloLuta;
    };
    DeeJay.prototype.getBarraEpecial = function () {
        return this.barraEspecial;
    };
    DeeJay.prototype.setBarraEspecial = function (barraEspecial) {
        this.barraEspecial = barraEspecial;
    };
    DeeJay.prototype.getPodeEspecial = function () {
        return this.podeEspecial;
    };
    DeeJay.prototype.setPodeEspecial = function (podeEspecial) {
        this.podeEspecial = podeEspecial;
    };
    DeeJay.prototype.golpeLeve = function () {
        console.log("Air Slasher!");
        var dano = Math.floor(Math.random() * 100);
        while (!(dano > 5 && dano < 10)) {
            dano = Math.floor(Math.random() * 100);
        }
        console.log("Causou ".concat(dano, " de dano!"));
    };
    DeeJay.prototype.golpePesado = function () {
        console.log("Machine Gun Upper!!");
        var dano = Math.floor(Math.random() * 100);
        while (!(dano > 10 && dano < 20)) {
            dano = Math.floor(Math.random() * 100);
        }
        console.log("Causou ".concat(dano, " de dano!"));
    };
    DeeJay.prototype.golpeEspecial = function () {
        if (this.podeEspecial === true && this.barraEspecial === 15) {
            console.log("Jackknife Maximum!!!");
            var dano = Math.floor(Math.random() * 100);
            while (!(dano > 30 && dano < 50)) {
                dano = Math.floor(Math.random() * 100);
            }
            console.log("Causou ".concat(dano, " de dano!"));
        }
    };
    return DeeJay;
}());
exports.DeeJay = DeeJay;
