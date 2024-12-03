"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blanka = void 0;
var Blanka = /** @class */ (function () {
    function Blanka(nome, vida, nacionalidade, estiloLuta) {
        this.podeEspecial = true;
        this.nome = nome;
        this.vida = vida;
        this.nacionalidade = nacionalidade;
        this.estiloLuta = estiloLuta;
    }
    Blanka.prototype.getNome = function () {
        return this.nome;
    };
    Blanka.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Blanka.prototype.getVida = function () {
        return this.vida;
    };
    Blanka.prototype.setVida = function (vida) {
        this.vida = vida;
    };
    Blanka.prototype.getNacio = function () {
        return this.nacionalidade;
    };
    Blanka.prototype.setNacio = function (nacio) {
        this.nacionalidade = nacio;
    };
    Blanka.prototype.getEstiloLuta = function () {
        return this.estiloLuta;
    };
    Blanka.prototype.setEstiloLuta = function (estiloLuta) {
        this.estiloLuta = estiloLuta;
    };
    Blanka.prototype.getBarraEpecial = function () {
        return this.barraEspecial;
    };
    Blanka.prototype.setBarraEspecial = function (barraEspecial) {
        this.barraEspecial = barraEspecial;
    };
    Blanka.prototype.getPodeEspecial = function () {
        return this.podeEspecial;
    };
    Blanka.prototype.setPodeEspecial = function (podeEspecial) {
        this.podeEspecial = podeEspecial;
    };
    Blanka.prototype.golpeLeve = function () {
        console.log("Eletric Thunder!");
        var dano = Math.floor(Math.random() * 100);
        while (!(dano > 5 && dano < 10)) {
            dano = Math.floor(Math.random() * 100);
        }
        console.log("Causou ".concat(dano, " de dano!"));
    };
    Blanka.prototype.golpePesado = function () {
        console.log("Rolling Attack!!");
        var dano = Math.floor(Math.random() * 100);
        while (!(dano > 10 && dano < 25)) {
            dano = Math.floor(Math.random() * 100);
        }
        console.log("Causou ".concat(dano, " de dano!"));
    };
    Blanka.prototype.golpeEspecial = function () {
        if (this.podeEspecial === true && this.barraEspecial === 12) {
            console.log("Super Electric Thunder!!!");
            var dano = Math.floor(Math.random() * 100);
            while (!(dano > 25 && dano < 40)) {
                dano = Math.floor(Math.random() * 100);
            }
            console.log("Causou ".concat(dano, " de dano!"));
        }
    };
    return Blanka;
}());
exports.Blanka = Blanka;
