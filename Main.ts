const ask = require("readline-sync")

import { ClasseAluno } from "./ClasseAluno"

let alunos: Array<ClasseAluno> = []
let menu = true

while (menu) {
    console.clear()
    console.log(`
------------ | Bem-Vindo a Hogwarts | ------------
[1] = Cadastrar aluno
[2] = Ver alunos cadastrados
[3] = Editar dados de um aluno
[4] = Deletar aluno 
[5] = Sair
--------------------------------------------------
`)

    let respostaMenu: number = Number(ask.question(`Oque voce deseja utilizar? `))
    switch (respostaMenu) {
        case 1:
            cadastrarAluno()
            break
        case 2:
            verAlunos()
            break
        case 3:
            editarAluno()
            break
        case 4:
            deletarAluno()
            break
        case 5:
            menu = false
            break
        default:
            console.log("Opção inavalida!")
            break
    }
}


function cadastrarAluno(): void {
    console.clear()
    let nome: string = ask.question(`Qual o nome do aluno? `)

    let idade: number = ask.question(`Qual a idade do aluno? `)

    let nacio: string = ask.question(`Qual a nacionalidade do aluno? `)

    console.log(`
--------------------------------------------------
[1] = Feitiçaria e Encantamentos
[2] = Poções
[3] = Transfiguração
[4] = Defesa Contra as Artes das Trevas
[5] = Herbologia
[6] = Astronomia
[7] = História da Magia
[8] = Cuidado de Criaturas Mágicas  
[9] = Voo
[10] = Magia Experimental   
[11] = Divinação
[12] = Runas Antigas
--------------------------------------------------`)

    let usuarioCM: number = Number(ask.question(`Qual classe Magica o aluno cursara? `))

    let classeMagica: string = ""

    switch (usuarioCM) {
        case 1:
            classeMagica = "Feitiçaria e Encantamentos"
            break
        case 2:
            classeMagica = "Poções"
            break
        case 3:
            classeMagica = "Transfiguração"
            break
        case 4:
            classeMagica = "Defesa Contra as Artes das Trevas"
            break
        case 5:
            classeMagica = "Herbologia"
            break
        case 6:
            classeMagica = "Astronomia"
            break
        case 7:
            classeMagica = "História da Magia"
            break
        case 8:
            classeMagica = "Cuidado de Criaturas Mágicas"
            break
        case 9:
            classeMagica = "Voo"
            break
        case 10:
            classeMagica = "Magia Experimental"
            break
        case 11:
            classeMagica = "Divinação"
            break
        case 12:
            classeMagica = "Runas Antigas"
            break
        default:
            console.log("Opção inavalida!")
    }

    let alunoNovo = new ClasseAluno(nome, idade, nacio, classeMagica)

    alunoNovo.sortearCasa()

    ask.question(`Tecle enter para continuar. `)

    alunos.push(alunoNovo)
    console.clear()
    alunoNovo.exibirInformacoes()

    ask.question(`Tecle enter para continuar. `)
}

function verAlunos() {
    console.clear()
    for (let aluno of alunos) {
        aluno.exibirInformacoes()
    }
    ask.question(`Tecle enter para continuar. `)
}

function editarAluno() {
    console.clear()

    let nome: string = ask.question(`Qual o nome do aluno que voce quer achar? `)

    let indiceAluno: null | number = null

    for (let aluno of alunos) {
        if (aluno.getNome() === nome) {
            let num: number = 1
            let nulo: null = null
            indiceAluno = alunos.indexOf(aluno)

            if (typeof(indiceAluno) === typeof(num)) {
                let alunoEncontrado: ClasseAluno = alunos[indiceAluno]
                console.log(`
[1] = Nome: ${alunoEncontrado.getNome()}
[2] = Idade: ${alunoEncontrado.getIdade()}
[3] = Nacionalidade: ${alunoEncontrado.getNacio()}
[4] = Casa: ${alunoEncontrado.getCasa()}
[5] = Classe M\agica: ${alunoEncontrado.getClasseMagica()}
[6] = Cancelar edição
`)
                let respostaEdit: number = Number(ask.question(`Oque você quer editar? `))

                switch (respostaEdit) {
                    case 1:
                        let novoNome: string = ask.question(`Qual sera o novo nome? `)
                        aluno.setNome(novoNome)
                        console.log(`Edição concluida.`)
                        ask.question(`Tecle enter para continuar. `)
                        break
                    case 2:
                        let novoIdade: number = ask.question(`Qual sera a nova idade? `)
                        aluno.setIdade(novoIdade)
                        console.log(`Edição concluida.`)
                        ask.question(`Tecle enter para continuar. `)
                        break
                    case 3:
                        let novoNacio: string = ask.question(`Qual sera a nova nacionalidade? `)
                        aluno.setNacio(novoNacio)
                        console.log(`Edição concluida.`)
                        ask.question(`Tecle enter para continuar. `)
                        break
                    case 4:
                        aluno.sortearCasa()
                        console.log(`Edição concluida.`)
                        ask.question(`Tecle enter para continuar. `)
                        break
                    case 5:
                        console.log(`
--------------------------------------------------
[1] = Feitiçaria e Encantamentos
[2] = Poções
[3] = Transfiguração
[4] = Defesa Contra as Artes das Trevas
[5] = Herbologia
[6] = Astronomia
[7] = História da Magia
[8] = Cuidado de Criaturas Mágicas  
[9] = Voo
[10] = Magia Experimental   
[11] = Divinação
[12] = Runas Antigas
--------------------------------------------------`)

                        let usuarioCM: number = Number(ask.question(`Qual classe Magica o aluno cursara? `))

                        let classeMagica: string = ""

                        switch (usuarioCM) {
                            case 1:
                                classeMagica = "Feitiçaria e Encantamentos"
                                break
                            case 2:
                                classeMagica = "Poções"
                                break
                            case 3:
                                classeMagica = "Transfiguração"
                                break
                            case 4:
                                classeMagica = "Defesa Contra as Artes das Trevas"
                                break
                            case 5:
                                classeMagica = "Herbologia"
                                break
                            case 6:
                                classeMagica = "Astronomia"
                                break
                            case 7:
                                classeMagica = "História da Magia"
                                break
                            case 8:
                                classeMagica = "Cuidado de Criaturas Mágicas"
                                break
                            case 9:
                                classeMagica = "Voo"
                                break
                            case 10:
                                classeMagica = "Magia Experimental"
                                break
                            case 11:
                                classeMagica = "Divinação"
                                break
                            case 12:
                                classeMagica = "Runas Antigas"
                                break
                            default:
                                console.log("Opção inavalida!")
                        }
                        aluno.setClasseMagica(classeMagica)
                        console.log(`Edição concluida.`)
                        ask.question(`Tecle enter para continuar. `)
                        break
                    case 6:
                        break
                }
            } else if(typeof(indiceAluno) === typeof(nulo)) {
                console.log(`Aluno não encontrado`)
                ask.question(`Tecle enter para continuar. `)
            }
        }
    }
}

function deletarAluno() {
    console.clear()
    let deletando: boolean = true

    let nome: string = ask.question(`Qual o nome do aluno que voce quer deletar? `)
    for (let aluno of alunos) {
        if (aluno.getNome() === nome) {
            let alunoEncontrado: ClasseAluno = aluno

            let certeza: string = ask.question(`Voce tem certeza que deseja excluir este aluno? (Sim ou Nao). `)

            if (certeza.toUpperCase() === "SIM") {
                console.log(`Avadaquedabra!!!`)
                console.log(`Aluno excluido.`)
                alunos.pop[alunos.indexOf(alunoEncontrado)]
                deletando = false
                ask.question(`Tecle enter para continuar. `)
            } else if (certeza.toUpperCase() === "NAO") {
                ask.question(`Tecle enter para continuar. `)
                deletando = false
            } else {
                console.log(`Opção inavalida!`)
                ask.question(`Tecle enter para continuar. `)
                deletando = false
            }
        } else {
            console.log(`Aluno não encontrado`)
            ask.question(`Tecle enter para continuar. `)
            deletando = false
        }
    }
}