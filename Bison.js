"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bison = void 0;
var Bison = /** @class */ (function () {
    function Bison(nome, vida, nacionalidade, estiloLuta) {
        this.podeEspecial = true;
        this.nome = nome;
        this.vida = vida;
        this.nacionalidade = nacionalidade;
        this.estiloLuta = estiloLuta;
    }
    Bison.prototype.getNome = function () {
        return this.nome;
    };
    Bison.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Bison.prototype.getVida = function () {
        return this.vida;
    };
    Bison.prototype.setVida = function (vida) {
        this.vida = vida;
    };
    Bison.prototype.getNacio = function () {
        return this.nacionalidade;
    };
    Bison.prototype.setNacio = function (nacio) {
        this.nacionalidade = nacio;
    };
    Bison.prototype.getEstiloLuta = function () {
        return this.estiloLuta;
    };
    Bison.prototype.setEstiloLuta = function (estiloLuta) {
        this.estiloLuta = estiloLuta;
    };
    Bison.prototype.getBarraEpecial = function () {
        return this.barraEspecial;
    };
    Bison.prototype.setBarraEspecial = function (barraEspecial) {
        this.barraEspecial = barraEspecial;
    };
    Bison.prototype.getPodeEspecial = function () {
        return this.podeEspecial;
    };
    Bison.prototype.setPodeEspecial = function (podeEspecial) {
        this.podeEspecial = podeEspecial;
    };
    Bison.prototype.golpeLeve = function () {
        console.log("Psycho Crusher!");
        var dano = Math.floor(Math.random() * 100);
        while (!(dano > 10 && dano < 20)) {
            dano = Math.floor(Math.random() * 100);
        }
        console.log("Causou ".concat(dano, " de dano!"));
    };
    Bison.prototype.golpePesado = function () {
        console.log("Scissor Kick!!");
        var dano = Math.floor(Math.random() * 100);
        while (!(dano > 15 && dano < 30)) {
            dano = Math.floor(Math.random() * 100);
        }
        console.log("Causou ".concat(dano, " de dano!"));
    };
    Bison.prototype.golpeEspecial = function () {
        if (this.podeEspecial === true && this.barraEspecial === 15) {
            console.log("Psycho Impact!!!");
            var dano = Math.floor(Math.random() * 100);
            while (!(dano > 30 && dano < 50)) {
                dano = Math.floor(Math.random() * 100);
            }
            console.log("Causou ".concat(dano, " de dano!"));
        }
    };
    return Bison;
}());
exports.Bison = Bison;
