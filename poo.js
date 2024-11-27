//definindo a classe cachorro (sem constructor)
class cachorro {
    //metodo latir ("au au")
    latir() {
        console.log("AU! AU!")
    }

    //metodo aniversario que aumenta a idade do cachorro em 1 ano
    aniversario() {
        this.idade += 1 //incrementa a idade do cachorro em 1
    }
}

//criando uma instancia da classe cachorro
const meuCachorro = new cachorro()
meuCachorro.nome = "Doki" //definindo o nome diretamente
meuCachorro.idade = 15 //definindo a idade diretamente

//chamando o método latir
meuCachorro.latir()
meuCachorro.aniversario()

//imprimindo
console.log(`Idade do ${meuCachorro.nome} é ${meuCachorro.idade}.`)

class lampada {
    ligar() {
        this.estado = "ligada"
        console.log(`A lampada está ${this.estado} com um brilho ${this.cor}.`)
    }
    desligar() {
        this.estado = "desligada"
        console.log(`A lampada está ${this.estado} sem um brilho ${this.cor}.`)
    }
}
const lampadaDaSala = new lampada()
lampadaDaSala.cor = `amarelo`

lampadaDaSala.ligar()
lampadaDaSala.desligar()

class pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
    saudar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`)
    }
}

const novaPessoa = new pessoa("Mateus", 15)
novaPessoa.saudar()

class livro {
    constructor(titulo, autor){
        this.titulo = titulo
        this.autor = autor
    }
    mostrarDetalhes(){
        console.log(`
Livro: ${this.titulo}
Autor: ${this.autor}`)
    }
}
const livroNovo = new livro("Harry Potter: e a pedra filosofal", "J. K. Rowling")
livroNovo.mostrarDetalhes()

class produto {
    constructor(nome, preco, quantidade){
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }
    calcularTotal(){
        console.log(`O valor do produto ${this.nome} é R$${(this.preco * this.quantidade).toFixed(2)}`)
    }
}

const maçã = new produto("maçã", 3 , 4)
maçã.calcularTotal()

class carro extends transporte {
    constructor(){

    }
    mover(){
        console.log(`O carro está andando na estrada`)
    }
}
class avião extends transporte {
    mover(){
        console.log(`O avião está voando no céu`)
    }
}
const meuCarro = new carro("Pegeut")
const meuAvião = new avião("Boing 333")

meuCarro.mover()
meuAvião.mover()