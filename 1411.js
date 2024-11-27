class pessoa {
    #nome
    #idade
    constructor(nome, idade) {
        this.#nome = nome
        this.#idade = idade
    }

    obterNome() {
        console.log(`Olá meu nome é ${this.#nome}`)
    }

    obterIdade() {
        console.log(`Eu tenho ${this.#idade} anos`)
    }

    definirIdade(novaIdade) {
        if (novaIdade > 0) {
            this.#idade = novaIdade
            return console.log(`Nova idade é ${this.#idade}`)
        } return console.log(`Idade invalida`)
    }
}

const pessoa1 = new pessoa(`Mateus`, 15)
pessoa1.obterNome()
pessoa1.obterIdade()
pessoa1.definirIdade(16)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class doceriadaCamila {
    #receitas = []
    #totalDoces
    //
    constructor(receitas, totalDoces) {
        this.#receitas = receitas
        this.#totalDoces = totalDoces
    }
    //
    adicionarReceita(receita) {
        this.#receitas.push(receita)
        console.log(`Receita adicionada com sucesso!`)
    }
    //
    mostrarReceitas() {
        console.log(this.#receitas)
    }
    //
    produzirDoce(receita) {
        if (this.#receitas.includes(receita)) {
            this.#totalDoces += 1
            console.log(`Um doce foi produzido`)
        } else {
            console.log(`Receita não encontrada`)
        }
    }
    //
    mostrarTotalDoces() {
        console.log(`Total de doces: ${this.#totalDoces}`)
    }
}
const doceria1 = new doceriadaCamila([`Branquinho`], 0)
doceria1.adicionarReceita("Pudim")
doceria1.mostrarReceitas()
doceria1.mostrarTotalDoces()
doceria1.produzirDoce("Pudim")
doceria1.mostrarTotalDoces()
doceria1.produzirDoce("brigadeiro")
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class jogador {
    constructor(nome, numero) {
        this.nome = nome
        this.numero = numero
    }
    jogar() {
        console.log(`${this.nome} (#${this.numero}) está em campo!!!`)
    }
}

class atacante extends jogador {
    jogar() {
        console.log(`${this.nome} (#${this.numero}) está em campo.`)
    }
}

class meioCampo extends jogador {
    jogar() {
        console.log(`${this.nome} (#${this.numero}) está costurando o jogo.`)
    }
}

class defensor extends jogador {
    jogar() {
        console.log(`${this.nome} (#${this.numero}) está organizando a defesa.`)
    }
}

function executarJogo(jogadores) {
    jogadores.forEach(jogador => {
        jogador.jogar()

    })
}

const jogador1 = new atacante(`Messi`, 10)
const jogador2 = new meioCampo(`Kross`, 8)
const jogador3 = new defensor(`Geromel`, 3)

const time = [jogador1, jogador2, jogador3]
executarJogo(time)