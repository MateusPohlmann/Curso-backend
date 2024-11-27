import { Personagem } from "./Personagem"

export class Guerreiro implements Personagem {
    private nome: string
    private vida: number = 150
    private força: number = 30
    private defesa: number = 30

    getNome(): string {
        return this.nome
    }
    setNome(nome: string): void{
        this.nome = nome
    }

    getVida(): number{
        return this.vida
    }
    setVida(vida: number): void{
        this.vida = vida
    }

    getForça(): number{
        return this.força
    }
    setForça(força: number): void{
        this.força = força
    }

    getDefesa(): number{
        return this.defesa
    }
    setDefesa(defesa: number): void{
        this.defesa = defesa
    }

    constructor(nome: string) {
        this.nome = nome
    }

    atacar(inimigo: Personagem): void {
        console.log(`
----------------------------------------------------------------
${this.nome} atacou ${inimigo.getNome()}.
`)
        inimigo.perderVida(this.força - inimigo.getDefesa())
    }

    perderVida(dano: number): void {
        this.vida = this.vida - dano

        console.log(`
${this.nome} tomou ${dano} de dano e ficou com ${this.vida} de vida
----------------------------------------------------------------
`)
    }
}