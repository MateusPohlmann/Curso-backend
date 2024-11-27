class Pessoa {
    nome: string
    idade: number
    constructor(nome: string, idade: number) {
        this.nome = nome
        this.idade = idade
    }
    apresentar():void{
        console.log(`Olá cpx , meu nome é ${this.nome} e tenho ${this.idade} anos`)
    }
}
const Pessoa1 = new Pessoa("Maria", 78)
Pessoa1.apresentar()

function soma(a:number, b:number){
    return a + b
}

const numero1 = 5
const numero2 = 3
console.log(`A soma de ${numero1} + ${numero2} é: ${soma(numero1, numero2)}`)
