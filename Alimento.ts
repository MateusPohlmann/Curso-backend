import { Produto } from "./Produto"

export class Alimento {
    nome: string
    ingredientes: Array<string>
    validade: number
    preço: number
    marca: string
    taxa: number

    constructor(nome: string, marca: string,) {
        this.nome = nome
        this.validade = 3322
        this.marca = marca
        this.preço = 3
        this.taxa = 2
    }

    calcularValorTotal(): number {
        return this.preço * this.taxa
    }
}