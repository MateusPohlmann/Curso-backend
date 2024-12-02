"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ryu = void 0;
var Ryu = /** @class */ (function () {
    function Ryu(nome, vida, nacionalidade, estiloLuta) {
        this.nome = nome;
        this.vida = vida;
        this.nacionalidade = nacionalidade;
        this.estiloLuta = estiloLuta;
    }
    Ryu.prototype.getNome = function () {
        return this.nome;
    };
    Ryu.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Ryu.prototype.getVida = function () {
        return this.vida;
    };
    Ryu.prototype.setVida = function (vida) {
        this.vida = vida;
    };
    Ryu.prototype.getNacio = function () {
        return this.nacionalidade;
    };
    Ryu.prototype.setNacio = function (nacio) {
        this.nacionalidade = nacio;
    };
    Ryu.prototype.getEstiloLuta = function () {
        return this.estiloLuta;
    };
    Ryu.prototype.setEstiloLuta = function (estiloLuta) {
        this.estiloLuta = estiloLuta;
    };
    Ryu.prototype.golpeLeve = function () {
        console.log("Hadouken!");
        var dano = Math.floor(Math.random() * 100);
        while (!(dano > 5 && dano < 15)) {
            dano = Math.floor(Math.random() * 100);
        }
        console.log("Causou ".concat(dano, " de dano!"));
    };
    Ryu.prototype.golpePesado = function () {
        console.log("Shoryuken!!");
        var dano = Math.floor(Math.random() * 100);
        while (!(dano > 15 && dano < 30)) {
            dano = Math.floor(Math.random() * 100);
        }
        console.log("Causou ".concat(dano, " de dano!"));
    };
    Ryu.prototype.golpeEspecial = function () {
        console.log("Metsu Hadouken!!!");
        var dano = Math.floor(Math.random() * 100);
        while (!(dano > 30 && dano < 50)) {
            dano = Math.floor(Math.random() * 100);
        }
        console.log("Causou ".concat(dano, " de dano!"));
    };
    return Ryu;
}());
exports.Ryu = Ryu;
