"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ask = require("readline-sync");
var Livro_1 = require("./Livro");
var Alimento_1 = require("./Alimento");
var Eletronico_1 = require("./Eletronico");
var livro1 = new Livro_1.Livro("Vermelho", "Tolkien", "Os senhor dos aneis");
console.log(livro1.capa);
var alimento1 = new Alimento_1.Alimento("Nescau", "Nestle");
console.log(alimento1.calcularValorTotal());
var carrinho = [];
function comprarProduto(produtoADD) {
    carrinho.push(produtoADD);
}
function verCarrinho() {
    console.clear();
    for (var _i = 0, carrinho_1 = carrinho; _i < carrinho_1.length; _i++) {
        var produto = carrinho_1[_i];
        console.log("".concat(produto.nome, ".....................").concat(produto.calcularValorTotal()));
    }
    ask.question("Tecle enter para continuar.");
}
function pagar() {
    console.log("Pagamento feito carrinho vazio");
    carrinho = [];
    ask.question("Tecle enter para continuar");
}
var menu = true;
while (menu) {
    console.clear();
    console.log("\n==================================\n1 = Comprar produto\n2 = Ver carrinho\n3 = Efetuar pagamento\n4 = Sair\n==================================\n");
    var opcaoDoUsuario = Number(ask.question("Digite uma opcao: "));
    switch (opcaoDoUsuario) {
        case 1:
            console.clear();
            console.log("\n==================================\nQual produto voc\u00EA ira querer\n1 = Livro\n2 = Alimento\n3 = Eletronico\n==================================\n");
            var opcaoTipoProd = Number(ask.question("Digite um  numero: "));
            switch (opcaoTipoProd) {
                case 1:
                    var nomeLivro = ask.question("Digite o nome do livro: ");
                    var autorLivro = ask.question("Digite o autor do livro: ");
                    var livroComprado = new Livro_1.Livro("", autorLivro, nomeLivro);
                    comprarProduto(livroComprado);
                    ask.question("Livro adicionado ao carrinho");
                    break;
                case 2:
                    var nomeAlimento = ask.question("Digite o alimento: ");
                    var marcaAlimento = ask.question("Digite a marca do alimento: ");
                    var alimentoComprado = new Alimento_1.Alimento(nomeAlimento, marcaAlimento);
                    comprarProduto(alimentoComprado);
                    ask.question("Alimento adicionado ao carrinho");
                    break;
                case 3:
                    var nomeEletronico = ask.question("Digite o : ");
                    var marcaEletronico = ask.question("Digite o autor do livro: ");
                    var eletronicoComprado = new Eletronico_1.Eletronico(nomeEletronico, marcaEletronico);
                    comprarProduto(eletronicoComprado);
                    ask.question("Eletronico adicionado ao carrinho");
                    break;
            }
            break;
        case 2:
            verCarrinho();
            break;
        case 3:
            pagar();
            break;
        case 4:
            menu = false;
            break;
    }
}
