import { Personagem } from "./Personagem";

export class Blanka implements Personagem {
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

    public golpeLeve(): void {
        console.log(`Eletric Thunder!`)
        let dano = Math.floor(Math.random() * 100)
        while (!(dano > 5 && dano < 10)) {
            dano = Math.floor(Math.random() * 100)
        }
        console.log(`Causou ${dano} de dano!`)
    }

    public golpePesado(): void {
        console.log(`Rolling Attack!!`)
        let dano = Math.floor(Math.random() * 100)
        while (!(dano > 10 && dano < 25)) {
            dano = Math.floor(Math.random() * 100)
        }
        console.log(`Causou ${dano} de dano!`)
    }

    public golpeEspecial(): void {
        if (this.podeEspecial === true && this.barraEspecial === 12) {
            console.log(`Super Electric Thunder!!!`)
            let dano = Math.floor(Math.random() * 100)
            while (!(dano > 25 && dano < 40)) {
                dano = Math.floor(Math.random() * 100)
            }
            console.log(`Causou ${dano} de dano!`)
        }
    }
}