const ask = require("readline-sync")
import { Produto } from "./Produto"
import { Livro } from "./Livro"
import { Alimento } from "./Alimento"
import { Eletronico } from "./Eletronico"
import { MetodosDePagamento } from "./MetodosDePagamento"
import { Pix } from "./Pix"
import { CartaoDeCredito } from "./CartaoDeCredito"
import { Dinheiro } from "./Dinheiro"

let livro1 = new Livro("Vermelho", "Tolkien", "Os senhor dos aneis")

console.log(livro1.capa)

let alimento1 = new Alimento("Nescau", "Nestle")

console.log(alimento1.calcularValorTotal())

let carrinho: Array<Produto> = []

function comprarProduto(produtoADD: Produto): void {
    carrinho.push(produtoADD)
}

function verCarrinho(): void {
    console.clear()
    for (let produto of carrinho) {
        console.log(`${produto.nome}.....................${produto.calcularValorTotal()}`)
    }
    ask.question(`Tecle enter para continuar.`)
}

function pagar(): void {
    console.log(`Pagamento feito carrinho vazio`)
    carrinho = []
    ask.question(`Tecle enter para continuar`)
}

let menu: boolean = true

while (menu) {
    console.clear()
    console.log(`
==================================
1 = Comprar produto
2 = Ver carrinho
3 = Efetuar pagamento
4 = Sair
==================================
`)
    let opcaoDoUsuario = Number(ask.question(`Digite uma opcao: `))

    switch (opcaoDoUsuario) {
        case 1:
            console.clear()
            console.log(`
==================================
Qual produto você ira querer
1 = Livro
2 = Alimento
3 = Eletronico
==================================
`)
            let opcaoTipoProd = Number(ask.question(`Digite um  numero: `))
            switch (opcaoTipoProd) {
                case 1:
                    let nomeLivro: string = ask.question(`Digite o nome do livro: `)
                    let autorLivro: string = ask.question(`Digite o autor do livro: `)
                    let livroComprado = new Livro("", autorLivro, nomeLivro,)
                    comprarProduto(livroComprado)
                    ask.question(`Livro adicionado ao carrinho`)
                    break
                case 2:
                    let nomeAlimento: string = ask.question(`Digite o alimento: `)
                    let marcaAlimento: string = ask.question(`Digite a marca do alimento: `)
                    let alimentoComprado = new Alimento(nomeAlimento, marcaAlimento)
                    comprarProduto(alimentoComprado)
                    ask.question(`Alimento adicionado ao carrinho`)
                    break
                case 3:
                    let nomeEletronico: string = ask.question(`Digite o : `)
                    let marcaEletronico: string = ask.question(`Digite o autor do livro: `)
                    let eletronicoComprado = new Eletronico(nomeEletronico, marcaEletronico)
                    comprarProduto(eletronicoComprado)
                    ask.question(`Eletronico adicionado ao carrinho`)
                    break
            }
            break
        case 2:
            verCarrinho()
            break
        case 3:
            pagar()
            break
        case 4:
            menu = false
            break

    }
}