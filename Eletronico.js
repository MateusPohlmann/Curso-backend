"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Eletronico = void 0;
var Eletronico = /** @class */ (function () {
    function Eletronico(nome, marca) {
        this.nome = nome;
        this.bateria = "Potente!!!";
        this.voltz = 120;
        this.marca = marca;
        this.valorCusto = 30;
    }
    Eletronico.prototype.calcularValorTotal = function () {
        return this.valorCusto;
    };
    return Eletronico;
}());
exports.Eletronico = Eletronico;
