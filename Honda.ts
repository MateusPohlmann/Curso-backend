import { Personagem } from "./Personagem";

export class Honda implements Personagem {
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
        console.log(`Hyakuretsu Harite!`)
        let dano = Math.floor(Math.random() * 100)

        while (!(dano > 5 && dano < 10)) {
            dano = Math.floor(Math.random() * 100)
        }
        console.log(`Causou ${dano} de dano!`)
    }

    public golpePesado(): void {
        console.log(`Sumo Headbutt!!`)
        let dano = Math.floor(Math.random() * 100)

        while (!(dano > 10 && dano < 20)) {
            dano = Math.floor(Math.random() * 100)
        }
        console.log(`Causou ${dano} de dano!`)
    }

    public golpeEspecial(): void {
        if (this.podeEspecial === true && this.barraEspecial === 13) {
            console.log(`Oicho Throw!!!`)
            let dano = Math.floor(Math.random() * 100)

            while (!(dano > 20 && dano < 40)) {
                dano = Math.floor(Math.random() * 100)
            }
            console.log(`Causou ${dano} de dano!`)
        }
    }
}