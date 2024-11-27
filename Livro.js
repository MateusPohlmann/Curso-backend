"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
var Livro = /** @class */ (function () {
    function Livro(capa, autor, nome) {
        this.capa = capa;
        this.autor = autor;
        this.nome = nome;
        this.comissaoAutor = 5;
        this.valorCusto = 15;
    }
    Livro.prototype.calcularValorTotal = function () {
        return this.valorCusto + this.comissaoAutor;
    };
    return Livro;
}());
exports.Livro = Livro;
