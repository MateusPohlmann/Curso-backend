"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Honda = void 0;
var Honda = /** @class */ (function () {
    function Honda(nome, vida, nacionalidade, estiloLuta) {
        this.podeEspecial = true;
        this.nome = nome;
        this.vida = vida;
        this.nacionalidade = nacionalidade;
        this.estiloLuta = estiloLuta;
    }
    Honda.prototype.getNome = function () {
        return this.nome;
    };
    Honda.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Honda.prototype.getVida = function () {
        return this.vida;
    };
    Honda.prototype.setVida = function (vida) {
        this.vida = vida;
    };
    Honda.prototype.getNacio = function () {
        return this.nacionalidade;
    };
    Honda.prototype.setNacio = function (nacio) {
        this.nacionalidade = nacio;
    };
    Honda.prototype.getEstiloLuta = function () {
        return this.estiloLuta;
    };
    Honda.prototype.setEstiloLuta = function (estiloLuta) {
        this.estiloLuta = estiloLuta;
    };
    Honda.prototype.getBarraEpecial = function () {
        return this.barraEspecial;
    };
    Honda.prototype.setBarraEspecial = function (barraEspecial) {
        this.barraEspecial = barraEspecial;
    };
    Honda.prototype.getPodeEspecial = function () {
        return this.podeEspecial;
    };
    Honda.prototype.setPodeEspecial = function (podeEspecial) {
        this.podeEspecial = podeEspecial;
    };
    Honda.prototype.golpeLeve = function () {
        console.log("Hyakuretsu Harite!");
        var dano = Math.floor(Math.random() * 100);
        while (!(dano > 5 && dano < 10)) {
            dano = Math.floor(Math.random() * 100);
        }
        console.log("Causou ".concat(dano, " de dano!"));
    };
    Honda.prototype.golpePesado = function () {
        console.log("Sumo Headbutt!!");
        var dano = Math.floor(Math.random() * 100);
        while (!(dano > 10 && dano < 20)) {
            dano = Math.floor(Math.random() * 100);
        }
        console.log("Causou ".concat(dano, " de dano!"));
    };
    Honda.prototype.golpeEspecial = function () {
        if (this.podeEspecial === true && this.barraEspecial === 13) {
            console.log("Oicho Throw!!!");
            var dano = Math.floor(Math.random() * 100);
            while (!(dano > 20 && dano < 40)) {
                dano = Math.floor(Math.random() * 100);
            }
            console.log("Causou ".concat(dano, " de dano!"));
        }
    };
    return Honda;
}());
exports.Honda = Honda;
