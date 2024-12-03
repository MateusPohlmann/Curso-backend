import { Personagem } from "./Personagem";

export class Ryu implements Personagem {
    private nome: string
    private vida: number
    private nacionalidade: string
    private estiloLuta: string
    private barraEspecial: number
    private podeEspecial: boolean = true

    constructor(nome: string, vida: number, nacionalidade: string, estiloLuta: string) {
        this.nome = nome
        this.vida = vida
        this.nacionalidade = nacionalidade
        this.estiloLuta = estiloLuta
    }

    public getNome(): string {
        return this.nome
    }
    public setNome(nome: string): void {
        this.nome = nome
    }

    public getVida(): number {
        return this.vida
    }
    public setVida(vida: number): void {
        this.vida = vida
    }

    public getNacio(): string {
        return this.nacionalidade
    }
    public setNacio(nacio: string): void {
        this.nacionalidade = nacio
    }

    public getEstiloLuta(): string {
        return this.estiloLuta
    }
    public setEstiloLuta(estiloLuta: string): void {
        this.estiloLuta = estiloLuta
    }

    public getBarraEpecial(): number {
        return this.barraEspecial
    }
    public setBarraEspecial(barraEspecial: number): void {
        this.barraEspecial = barraEspecial
    }

    public getPodeEspecial(): boolean {
        return this.podeEspecial
    }
    public setPodeEspecial(podeEspecial: boolean): void {
        this.podeEspecial = podeEspecial
    }

    public golpeLeve(): number {
        let dano: number = 0
        console.log(`Hadouken!`)
        let dano = Math.floor(Math.random() * 100)

        while (!(dano > 5 && dano < 15)) {
            dano = Math.floor(Math.random() * 100)
        }
        console.log(`Causou ${dano} de dano!`)
        return dano
    }

    public golpePesado(): number {
        let dano: number = 0
        console.log(`Shoryuken!!`)
        let dano = Math.floor(Math.random() * 100)

        while (!(dano > 15 && dano < 30)) {
            dano = Math.floor(Math.random() * 100)
        }
        console.log(`Causou ${dano} de dano!`)
        return dano
    }

    public golpeEspecial(): number {
        let dano: number = 0
        if (this.podeEspecial === true && this.barraEspecial === 15) {
            console.log(`Metsu Hadouken!!!`)
            dano = Math.floor(Math.random() * 100)

            while (!(dano > 30 && dano < 50)) {
                dano = Math.floor(Math.random() * 100)
            }
            console.log(`Causou ${dano} de dano!`)
        }
        return dano
    }
}