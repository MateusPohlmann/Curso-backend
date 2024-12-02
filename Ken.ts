import { Personagem } from "./Personagem";

export class Ken implements Personagem {
    private nome: string
    private vida: number
    private nacionalidade: string
    private estiloLuta: string

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

    public golpeLeve(): void {
        console.log(`Hadouken!`)
        let dano = Math.floor(Math.random() * 100)

        while (!(dano > 5 && dano < 15)) {
            dano = Math.floor(Math.random() * 100)
        }
        console.log(`Causou ${dano} de dano!`)
    }

    public golpePesado(): void {
        console.log(`Shoryuken!!`)
        let dano = Math.floor(Math.random() * 100)

        while (!(dano > 15 && dano < 30)) {
            dano = Math.floor(Math.random() * 100)
        }
        console.log(`Causou ${dano} de dano!`)
    }

    public golpeEspecial(): void {
        console.log(`Shiryuken!!!`)
        let dano = Math.floor(Math.random() * 100)

        while (!(dano > 25 && dano < 45)) {
            dano = Math.floor(Math.random() * 100)
        }
        console.log(`Causou ${dano} de dano!`)
    }
}