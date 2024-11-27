var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Pessoa.prototype.apresentar = function () {
        console.log("Ol\u00E1 cpx , meu nome \u00E9 ".concat(this.nome, " e tenho ").concat(this.idade, " anos"));
    };
    return Pessoa;
}());
var Pessoa1 = new Pessoa("Maria", 78);
Pessoa1.apresentar();
function soma(a, b) {
    return a + b;
}
var numero1 = 5;
var numero2 = 3;
console.log("A soma de ".concat(numero1, " + ").concat(numero2, " \u00E9: ").concat(soma(numero1, numero2)));
