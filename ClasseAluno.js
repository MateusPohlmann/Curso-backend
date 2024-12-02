"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClasseAluno = void 0;
var ClasseAluno = /** @class */ (function () {
    function ClasseAluno(nome, idade, nacio, classeMagica) {
        this.casa = null;
        this.nome = nome;
        this.idade = idade;
        this.nacio = nacio;
        this.classeMagica = classeMagica;
    }
    ClasseAluno.prototype.getNome = function () {
        return this.nome;
    };
    ClasseAluno.prototype.setNome = function (nomeNovo) {
        this.nome = nomeNovo;
    };
    ClasseAluno.prototype.getIdade = function () {
        return this.idade;
    };
    ClasseAluno.prototype.setIdade = function (idadeNovo) {
        this.idade = idadeNovo;
    };
    ClasseAluno.prototype.getNacio = function () {
        return this.nacio;
    };
    ClasseAluno.prototype.setNacio = function (nacioNovo) {
        this.nacio = nacioNovo;
    };
    ClasseAluno.prototype.getCasa = function () {
        return this.casa;
    };
    ClasseAluno.prototype.setCasa = function (casaNovo) {
        this.casa = casaNovo;
    };
    ClasseAluno.prototype.getClasseMagica = function () {
        return this.classeMagica;
    };
    ClasseAluno.prototype.setClasseMagica = function (classeMagicaNova) {
        this.classeMagica = classeMagicaNova;
    };
    ClasseAluno.prototype.sortearCasa = function () {
        var casas = ["Grifinória", "Sonserina", "Lufa-Lufa", "Corvinal"];
        var sorteio = casas[Math.floor(Math.random() * casas.length)];
        console.log("Hummmmm........ .A casa escolhida foi......");
        switch (sorteio) {
            case "Grifinória":
                console.log("GRIFIN\u00D3RIA!!!");
                this.setCasa("Grifinória");
                break;
            case "Sonserina":
                console.log("SONSERINA!!!");
                this.setCasa("Sonserina");
                break;
            case "Lufa-Lufa":
                console.log("LUFA-LUFA!!!");
                this.setCasa("Lufa-Lufa");
                break;
            case "Corvinal":
                console.log("CORVINAL!!!");
                this.setCasa("Corvinal");
                break;
        }
    };
    ClasseAluno.prototype.exibirInformacoes = function () {
        console.log("\n|---------------------------------------------------\n| Nome: ".concat(this.getNome(), "\n| Idade: ").concat(this.getIdade(), "\n| Nacionalidade: ").concat(this.getNacio(), "\n| Casa: ").concat(this.getCasa(), "\n| Classe Magica: ").concat(this.getClasseMagica(), "\n|---------------------------------------------------\n"));
    };
    return ClasseAluno;
}());
exports.ClasseAluno = ClasseAluno;
