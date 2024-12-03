"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zangief = void 0;
var Zangief = /** @class */ (function () {
    function Zangief(nome, vida, nacionalidade, estiloLuta) {
        this.podeEspecial = true;
        this.nome = nome;
        this.vida = vida;
        this.nacionalidade = nacionalidade;
        this.estiloLuta = estiloLuta;
    }
    Zangief.prototype.getNome = function () {
        return this.nome;
    };
    Zangief.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Zangief.prototype.getVida = function () {
        return this.vida;
    };
    Zangief.prototype.setVida = function (vida) {
        this.vida = vida;
    };
    Zangief.prototype.getNacio = function () {
        return this.nacionalidade;
    };
    Zangief.prototype.setNacio = function (nacio) {
        this.nacionalidade = nacio;
    };
    Zangief.prototype.getEstiloLuta = function () {
        return this.estiloLuta;
    };
    Zangief.prototype.setEstiloLuta = function (estiloLuta) {
        this.estiloLuta = estiloLuta;
    };
    Zangief.prototype.getBarraEpecial = function () {
        return this.barraEspecial;
    };
    Zangief.prototype.setBarraEspecial = function (barraEspecial) {
        this.barraEspecial = barraEspecial;
    };
    Zangief.prototype.getPodeEspecial = function () {
        return this.podeEspecial;
    };
    Zangief.prototype.setPodeEspecial = function (podeEspecial) {
        this.podeEspecial = podeEspecial;
    };
    Zangief.prototype.golpeLeve = function () {
        console.log("Lariat!");
        var dano = Math.floor(Math.random() * 100);
        while (!(dano > 5 && dano < 15)) {
            dano = Math.floor(Math.random() * 100);
        }
        console.log("Causou ".concat(dano, " de dano!"));
    };
    Zangief.prototype.golpePesado = function () {
        console.log("Spinning Piledriver!!");
        var dano = Math.floor(Math.random() * 100);
        while (!(dano > 15 && dano < 30)) {
            dano = Math.floor(Math.random() * 100);
        }
        console.log("Causou ".concat(dano, " de dano!"));
    };
    Zangief.prototype.golpeEspecial = function () {
        if (this.podeEspecial === true && this.barraEspecial === 15) {
            console.log("Final Atomic Buster!!!");
            var dano = Math.floor(Math.random() * 100);
            while (!(dano > 35 && dano < 50)) {
                dano = Math.floor(Math.random() * 100);
            }
            console.log("Causou ".concat(dano, " de dano!"));
        }
    };
    return Zangief;
}());
exports.Zangief = Zangief;
