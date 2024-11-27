class veiculo {
    constructor(velocidade) {
        this.velocidade = velocidade
    }
    acelerar() {
        this.velocidade += 10
        console.log(`Velocidade atual ${this.velocidade} km/h.`)
    }
}

class carro extends veiculo {
    constructor(velocidade) {
        super(velocidade)
    }
    buzinar() {
        console.log(`Buzinando!`)
    }
}

const carro1 = new carro(70)
carro1.acelerar()
carro1.buzinar()
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class animal {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`O animal faz um som!`)
    }
}

class cachorro extends animal {
    constructor(nome) {
        super(nome)
    }
    falar() {
        console.log(`O cachorro late! meu nome é ${this.nome}`)
    }
}
const cachorro1 = new cachorro(`Nino`)
cachorro1.falar()
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class treinoBase {
    constructor(exercicios, duração, nivel) {
        this.exercicios = exercicios
        this.duração = duração
        this.nivel = nivel
    }
    mostrarTreinoBase() {
        console.log(`
Informações do treino: 
Exercicios: ${this.exercicios}
Duração: ${this.duração}m
Nivel: ${this.nivel}
`)
    }
}

class treinoPersonalizado extends treinoBase {
    constructor(exercicios, objetivo, duração, nivel) {
        super(exercicios, duração, nivel)
        this.objetivo = objetivo
    }
    mostrarTreinoPersonalizado() {
        console.log(`
Informações do treino: 
Exercicios: ${this.exercicios}
Objetivo: ${this.objetivo}
Duração: ${this.duração}m
Nivel: ${this.nivel}
`)
    }
}

const treinoCbum = new treinoBase("Agachamento com peso", 1, "Dificil")
const treinoOrdeli = new treinoPersonalizado("Agachamento com peso", "Fazer 1000 repetições", 10, "facil")
treinoCbum.mostrarTreinoBase()
treinoOrdeli.mostrarTreinoPersonalizado()
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class conta {
    #saldo = 2000
    constructor(nome) {
        this.nome = nome
    }
    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor
            return `Deposito de R$${valor} realizado`
        }
        return `Valor inválido`
    }
    obterSaldo() {
        return `O saldo é R$${this.#saldo}`
    }
}
const conta1 = new conta(`Gwen`)
conta1.depositar(20)
console.log(
conta1, 
conta1.obterSaldo())