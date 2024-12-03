"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ken = void 0;
var Ken = /** @class */ (function () {
    function Ken(nome, vida, nacionalidade, estiloLuta) {
        this.podeEspecial = true;
        this.nome = nome;
        this.vida = vida;
        this.nacionalidade = nacionalidade;
        this.estiloLuta = estiloLuta;
    }
    Ken.prototype.getNome = function () {
        return this.nome;
    };
    Ken.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Ken.prototype.getVida = function () {
        return this.vida;
    };
    Ken.prototype.setVida = function (vida) {
        this.vida = vida;
    };
    Ken.prototype.getNacio = function () {
        return this.nacionalidade;
    };
    Ken.prototype.setNacio = function (nacio) {
        this.nacionalidade = nacio;
    };
    Ken.prototype.getEstiloLuta = function () {
        return this.estiloLuta;
    };
    Ken.prototype.setEstiloLuta = function (estiloLuta) {
        this.estiloLuta = estiloLuta;
    };
    Ken.prototype.getBarraEpecial = function () {
        return this.barraEspecial;
    };
    Ken.prototype.setBarraEspecial = function (barraEspecial) {
        this.barraEspecial = barraEspecial;
    };
    Ken.prototype.getPodeEspecial = function () {
        return this.podeEspecial;
    };
    Ken.prototype.setPodeEspecial = function (podeEspecial) {
        this.podeEspecial = podeEspecial;
    };
    Ken.prototype.golpeLeve = function () {
        console.log("Hadouken!");
        var dano = Math.floor(Math.random() * 100);
        while (!(dano > 5 && dano < 15)) {
            dano = Math.floor(Math.random() * 100);
        }
        console.log("Causou ".concat(dano, " de dano!"));
    };
    Ken.prototype.golpePesado = function () {
        console.log("Shoryuken!!");
        var dano = Math.floor(Math.random() * 100);
        while (!(dano > 15 && dano < 30)) {
            dano = Math.floor(Math.random() * 100);
        }
        console.log("Causou ".concat(dano, " de dano!"));
    };
    Ken.prototype.golpeEspecial = function () {
        if (this.podeEspecial === true && this.barraEspecial === 12) {
            console.log("Shiryuken!!!");
            var dano = Math.floor(Math.random() * 100);
            while (!(dano > 25 && dano < 45)) {
                dano = Math.floor(Math.random() * 100);
            }
            console.log("Causou ".concat(dano, " de dano!"));
        }
    };
    return Ken;
}());
exports.Ken = Ken;
