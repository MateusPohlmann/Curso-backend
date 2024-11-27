import { MetodosDePagamento } from "./MetodosDePagamento";

export class CartaoDeCredito implements     MetodosDePagamento {
    pagar(): void{
        console.log(`Você pagou suas compras com cartão de credito.`)
    }
}