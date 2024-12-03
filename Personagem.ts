export interface Personagem {
    getNome(): string
    setNome(nome: string): void

    getVida(): number
    setVida(vida: number): void

    getNacio(): string
    setNacio(nacio: string): void

    getEstiloLuta(): string
    setEstiloLuta(estiloLuta: string): void

    getBarraEpecial(): number
    setBarraEspecial(barraEspecial: number): void

    getPodeEspecial(): boolean
    setPodeEspecial(podeEspecial: boolean): void 

    golpeLeve(): void

    golpePesado(): void

    golpeEspecial(): void
}