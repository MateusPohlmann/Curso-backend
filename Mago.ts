import { Personagem } from "./Personagem"

export class Mago implements Personagem {
    private nome: string
    private vida: number = 90
    private força: number = 60
    private defesa: number = 15
    
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
        this.vida  -= dano

        console.log(`

${this.nome} tomou ${dano} de dano e ficou com ${this.vida} de vida
----------------------------------------------------------------
`)
    }
}