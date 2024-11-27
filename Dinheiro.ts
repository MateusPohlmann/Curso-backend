import { MetodosDePagamento } from "./MetodosDePagamento";

export class Dinheiro implements     MetodosDePagamento {
    pagar(): void{
        console.log(`Você pagou suas compras com dinheiro.`)
    }
}