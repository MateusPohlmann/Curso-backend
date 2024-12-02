function calcularDano(min: number, max: number, tipo: string): number {
    const probabilidade = Math.random()
    let dano: number

    if (tipo === 'leve') {
        if (probabilidade < 0.8) {
            dano = Math.floor(Math.random() * (max - min + 1)) + min
        } else {
            dano = Math.floor(Math.random() * ((min + 5) - min + 1)) + min
        }
    } else if (tipo === 'pesado') {
        if (probabilidade < 0.5) {
            dano = Math.floor(Math.random() * ((min + 5) - min + 1)) + min
        } else {
            dano = Math.floor(Math.random() * (max - min + 1)) + min
        }
    } else {
        dano = Math.floor(Math.random() * (max - min + 1)) + min
    }

    return dano
}