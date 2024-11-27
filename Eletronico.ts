import { Produto } from "./Produto"

export class Eletronico implements Produto {
    nome: string
    bateria: string
    voltz: number
    marca: string
    valorCusto: number

    constructor(nome: string, marca: string) {
        this.nome = nome
        this.bateria = "Potente!!!"
        this.voltz = 120
        this.marca = marca
        this.valorCusto = 30
    }

    calcularValorTotal(): number {
        return this.valorCusto
    }
}