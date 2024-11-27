export interface Personagem {
    getNome(): string
    setNome(nome: string): void

    getVida(): number
    setVida(vida: number): void

    getForça(): number
    setForça(força: number): void

    getDefesa(): number
    setDefesa(defesa: number): void

    atacar(inimigo: Personagem): void

    perderVida(dano: number): void
}