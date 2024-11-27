"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guerreiro = void 0;
var Guerreiro = /** @class */ (function () {
    function Guerreiro(nome) {
        this.vida = 150;
        this.força = 30;
        this.defesa = 30;
        this.nome = nome;
    }
    Guerreiro.prototype.getNome = function () {
        return this.nome;
    };
    Guerreiro.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Guerreiro.prototype.getVida = function () {
        return this.vida;
    };
    Guerreiro.prototype.setVida = function (vida) {
        this.vida = vida;
    };
    Guerreiro.prototype.getForça = function () {
        return this.força;
    };
    Guerreiro.prototype.setForça = function (força) {
        this.força = força;
    };
    Guerreiro.prototype.getDefesa = function () {
        return this.defesa;
    };
    Guerreiro.prototype.setDefesa = function (defesa) {
        this.defesa = defesa;
    };
    Guerreiro.prototype.atacar = function (inimigo) {
        console.log("\n----------------------------------------------------------------\n".concat(this.nome, " atacou ").concat(inimigo.getNome(), ".\n"));
        inimigo.perderVida(this.força - inimigo.getDefesa());
    };
    Guerreiro.prototype.perderVida = function (dano) {
        this.vida = this.vida - dano;
        console.log("\n".concat(this.nome, " tomou ").concat(dano, " de dano e ficou com ").concat(this.vida, " de vida\n----------------------------------------------------------------\n"));
    };
    return Guerreiro;
}());
exports.Guerreiro = Guerreiro;
