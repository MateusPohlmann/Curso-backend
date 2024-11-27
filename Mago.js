"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mago = void 0;
var Mago = /** @class */ (function () {
    function Mago(nome) {
        this.vida = 90;
        this.força = 60;
        this.defesa = 15;
        this.nome = nome;
    }
    Mago.prototype.getNome = function () {
        return this.nome;
    };
    Mago.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Mago.prototype.getVida = function () {
        return this.vida;
    };
    Mago.prototype.setVida = function (vida) {
        this.vida = vida;
    };
    Mago.prototype.getForça = function () {
        return this.força;
    };
    Mago.prototype.setForça = function (força) {
        this.força = força;
    };
    Mago.prototype.getDefesa = function () {
        return this.defesa;
    };
    Mago.prototype.setDefesa = function (defesa) {
        this.defesa = defesa;
    };
    Mago.prototype.atacar = function (inimigo) {
        console.log("\n----------------------------------------------------------------\n".concat(this.nome, " atacou ").concat(inimigo.getNome(), ".\n\n"));
        inimigo.perderVida(this.força - inimigo.getDefesa());
    };
    Mago.prototype.perderVida = function (dano) {
        this.vida -= dano;
        console.log("\n\n".concat(this.nome, " tomou ").concat(dano, " de dano e ficou com ").concat(this.vida, " de vida\n----------------------------------------------------------------\n"));
    };
    return Mago;
}());
exports.Mago = Mago;
