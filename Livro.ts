import { Produto } from "./Produto"

export class Livro implements Produto {
    capa: string
    autor: string
    nome: string
    comissaoAutor: number
    valorCusto: number

    constructor(capa: string, autor: string, nome: string) {
        this.capa = capa
        this.autor = autor
        this.nome = nome
        this.comissaoAutor = 5
        this.valorCusto = 15
    }

    calcularValorTotal(): number {
        return this.valorCusto + this.comissaoAutor
    }

}