"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cammy = void 0;
var Cammy = /** @class */ (function () {
    function Cammy(nome, vida, nacionalidade, estiloLuta) {
        this.podeEspecial = true;
        this.nome = nome;
        this.vida = vida;
        this.nacionalidade = nacionalidade;
        this.estiloLuta = estiloLuta;
    }
    Cammy.prototype.getNome = function () {
        return this.nome;
    };
    Cammy.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Cammy.prototype.getVida = function () {
        return this.vida;
    };
    Cammy.prototype.setVida = function (vida) {
        this.vida = vida;
    };
    Cammy.prototype.getNacio = function () {
        return this.nacionalidade;
    };
    Cammy.prototype.setNacio = function (nacio) {
        this.nacionalidade = nacio;
    };
    Cammy.prototype.getEstiloLuta = function () {
        return this.estiloLuta;
    };
    Cammy.prototype.setEstiloLuta = function (estiloLuta) {
        this.estiloLuta = estiloLuta;
    };
    Cammy.prototype.getBarraEpecial = function () {
        return this.barraEspecial;
    };
    Cammy.prototype.setBarraEspecial = function (barraEspecial) {
        this.barraEspecial = barraEspecial;
    };
    Cammy.prototype.getPodeEspecial = function () {
        return this.podeEspecial;
    };
    Cammy.prototype.setPodeEspecial = function (podeEspecial) {
        this.podeEspecial = podeEspecial;
    };
    Cammy.prototype.golpeLeve = function () {
        console.log("Spiral Arrow!");
        var dano = Math.floor(Math.random() * 100);
        while (!(dano > 5 && dano < 15)) {
            dano = Math.floor(Math.random() * 100);
        }
        console.log("Causou ".concat(dano, " de dano!"));
    };
    Cammy.prototype.golpePesado = function () {
        console.log("Cannon Spike!!");
        var dano = Math.floor(Math.random() * 100);
        while (!(dano > 15 && dano < 25)) {
            dano = Math.floor(Math.random() * 100);
        }
        console.log("Causou ".concat(dano, " de dano!"));
    };
    Cammy.prototype.golpeEspecial = function () {
        if (this.podeEspecial === true && this.barraEspecial === 12) {
            console.log("Hooligan Combination!!!");
            var dano = Math.floor(Math.random() * 100);
            while (!(dano > 20 && dano < 40)) {
                dano = Math.floor(Math.random() * 100);
            }
            console.log("Causou ".concat(dano, " de dano!"));
        }
    };
    return Cammy;
}());
exports.Cammy = Cammy;
