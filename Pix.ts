import { MetodosDePagamento } from "./MetodosDePagamento";

export class Pix implements     MetodosDePagamento {
    pagar(): void{
        console.log(`Você pagou suas compras com pix.`)
    }
}