"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alimento = void 0;
var Alimento = /** @class */ (function () {
    function Alimento(nome, marca) {
        this.nome = nome;
        this.validade = 3322;
        this.marca = marca;
        this.preço = 3;
        this.taxa = 2;
    }
    Alimento.prototype.calcularValorTotal = function () {
        return this.preço * this.taxa;
    };
    return Alimento;
}());
exports.Alimento = Alimento;
