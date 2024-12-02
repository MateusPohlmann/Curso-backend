"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ask = require("readline-sync");
var ClasseAluno_1 = require("./ClasseAluno");
var alunos = [];
var menu = true;
while (menu) {
    console.clear();
    console.log("\n------------ | Bem-Vindo a Hogwarts | ------------\n[1] = Cadastrar aluno\n[2] = Ver alunos cadastrados\n[3] = Editar dados de um aluno\n[4] = Deletar aluno \n[5] = Sair\n--------------------------------------------------\n");
    var respostaMenu = Number(ask.question("Oque voce deseja utilizar? "));
    switch (respostaMenu) {
        case 1:
            cadastrarAluno();
            break;
        case 2:
            verAlunos();
            break;
        case 3:
            editarAluno();
            break;
        case 4:
            deletarAluno();
            break;
        case 5:
            menu = false;
            break;
        default:
            console.log("Opção inavalida!");
            break;
    }
}
function cadastrarAluno() {
    console.clear();
    var nome = ask.question("Qual o nome do aluno? ");
    var idade = ask.question("Qual a idade do aluno? ");
    var nacio = ask.question("Qual a nacionalidade do aluno? ");
    console.log("\n--------------------------------------------------\n[1] = Feiti\u00E7aria e Encantamentos\n[2] = Po\u00E7\u00F5es\n[3] = Transfigura\u00E7\u00E3o\n[4] = Defesa Contra as Artes das Trevas\n[5] = Herbologia\n[6] = Astronomia\n[7] = Hist\u00F3ria da Magia\n[8] = Cuidado de Criaturas M\u00E1gicas  \n[9] = Voo\n[10] = Magia Experimental   \n[11] = Divina\u00E7\u00E3o\n[12] = Runas Antigas\n--------------------------------------------------");
    var usuarioCM = Number(ask.question("Qual classe Magica o aluno cursara? "));
    var classeMagica = "";
    switch (usuarioCM) {
        case 1:
            classeMagica = "Feitiçaria e Encantamentos";
            break;
        case 2:
            classeMagica = "Poções";
            break;
        case 3:
            classeMagica = "Transfiguração";
            break;
        case 4:
            classeMagica = "Defesa Contra as Artes das Trevas";
            break;
        case 5:
            classeMagica = "Herbologia";
            break;
        case 6:
            classeMagica = "Astronomia";
            break;
        case 7:
            classeMagica = "História da Magia";
            break;
        case 8:
            classeMagica = "Cuidado de Criaturas Mágicas";
            break;
        case 9:
            classeMagica = "Voo";
            break;
        case 10:
            classeMagica = "Magia Experimental";
            break;
        case 11:
            classeMagica = "Divinação";
            break;
        case 12:
            classeMagica = "Runas Antigas";
            break;
        default:
            console.log("Opção inavalida!");
    }
    var alunoNovo = new ClasseAluno_1.ClasseAluno(nome, idade, nacio, classeMagica);
    alunoNovo.sortearCasa();
    ask.question("Tecle enter para continuar. ");
    alunos.push(alunoNovo);
    console.clear();
    alunoNovo.exibirInformacoes();
    ask.question("Tecle enter para continuar. ");
}
function verAlunos() {
    console.clear();
    for (var _i = 0, alunos_1 = alunos; _i < alunos_1.length; _i++) {
        var aluno = alunos_1[_i];
        aluno.exibirInformacoes();
    }
    ask.question("Tecle enter para continuar. ");
}
function editarAluno() {
    console.clear();
    var nome = ask.question("Qual o nome do aluno que voce quer achar? ");
    var indiceAluno = null;
    for (var _i = 0, alunos_2 = alunos; _i < alunos_2.length; _i++) {
        var aluno = alunos_2[_i];
        if (aluno.getNome() === nome) {
            var num = 1;
            var nulo = null;
            indiceAluno = alunos.indexOf(aluno);
            if (typeof (indiceAluno) === typeof (num)) {
                var alunoEncontrado = alunos[indiceAluno];
                console.log("\n[1] = Nome: ".concat(alunoEncontrado.getNome(), "\n[2] = Idade: ").concat(alunoEncontrado.getIdade(), "\n[3] = Nacionalidade: ").concat(alunoEncontrado.getNacio(), "\n[4] = Casa: ").concat(alunoEncontrado.getCasa(), "\n[5] = Classe Magica: ").concat(alunoEncontrado.getClasseMagica(), "\n[6] = Cancelar edi\u00E7\u00E3o\n"));
                var respostaEdit = Number(ask.question("Oque voc\u00EA quer editar? "));
                switch (respostaEdit) {
                    case 1:
                        var novoNome = ask.question("Qual sera o novo nome? ");
                        aluno.setNome(novoNome);
                        console.log("Edi\u00E7\u00E3o concluida.");
                        ask.question("Tecle enter para continuar. ");
                        break;
                    case 2:
                        var novoIdade = ask.question("Qual sera a nova idade? ");
                        aluno.setIdade(novoIdade);
                        console.log("Edi\u00E7\u00E3o concluida.");
                        ask.question("Tecle enter para continuar. ");
                        break;
                    case 3:
                        var novoNacio = ask.question("Qual sera a nova nacionalidade? ");
                        aluno.setNacio(novoNacio);
                        console.log("Edi\u00E7\u00E3o concluida.");
                        ask.question("Tecle enter para continuar. ");
                        break;
                    case 4:
                        aluno.sortearCasa();
                        console.log("Edi\u00E7\u00E3o concluida.");
                        ask.question("Tecle enter para continuar. ");
                        break;
                    case 5:
                        console.log("\n--------------------------------------------------\n[1] = Feiti\u00E7aria e Encantamentos\n[2] = Po\u00E7\u00F5es\n[3] = Transfigura\u00E7\u00E3o\n[4] = Defesa Contra as Artes das Trevas\n[5] = Herbologia\n[6] = Astronomia\n[7] = Hist\u00F3ria da Magia\n[8] = Cuidado de Criaturas M\u00E1gicas  \n[9] = Voo\n[10] = Magia Experimental   \n[11] = Divina\u00E7\u00E3o\n[12] = Runas Antigas\n--------------------------------------------------");
                        var usuarioCM = Number(ask.question("Qual classe Magica o aluno cursara? "));
                        var classeMagica = "";
                        switch (usuarioCM) {
                            case 1:
                                classeMagica = "Feitiçaria e Encantamentos";
                                break;
                            case 2:
                                classeMagica = "Poções";
                                break;
                            case 3:
                                classeMagica = "Transfiguração";
                                break;
                            case 4:
                                classeMagica = "Defesa Contra as Artes das Trevas";
                                break;
                            case 5:
                                classeMagica = "Herbologia";
                                break;
                            case 6:
                                classeMagica = "Astronomia";
                                break;
                            case 7:
                                classeMagica = "História da Magia";
                                break;
                            case 8:
                                classeMagica = "Cuidado de Criaturas Mágicas";
                                break;
                            case 9:
                                classeMagica = "Voo";
                                break;
                            case 10:
                                classeMagica = "Magia Experimental";
                                break;
                            case 11:
                                classeMagica = "Divinação";
                                break;
                            case 12:
                                classeMagica = "Runas Antigas";
                                break;
                            default:
                                console.log("Opção inavalida!");
                        }
                        aluno.setClasseMagica(classeMagica);
                        console.log("Edi\u00E7\u00E3o concluida.");
                        ask.question("Tecle enter para continuar. ");
                        break;
                    case 6:
                        break;
                }
            }
            else if (typeof (indiceAluno) === typeof (nulo)) {
                console.log("Aluno n\u00E3o encontrado");
                ask.question("Tecle enter para continuar. ");
            }
        }
    }
}
function deletarAluno() {
    console.clear();
    var deletando = true;
    var nome = ask.question("Qual o nome do aluno que voce quer deletar? ");
    for (var _i = 0, alunos_3 = alunos; _i < alunos_3.length; _i++) {
        var aluno = alunos_3[_i];
        if (aluno.getNome() === nome) {
            var alunoEncontrado = aluno;
            var certeza = ask.question("Voce tem certeza que deseja excluir este aluno? (Sim ou Nao). ");
            if (certeza.toUpperCase() === "SIM") {
                console.log("Avadaquedabra!!!");
                console.log("Aluno excluido.");
                alunos.pop[alunos.indexOf(alunoEncontrado)];
                deletando = false;
                ask.question("Tecle enter para continuar. ");
            }
            else if (certeza.toUpperCase() === "NAO") {
                ask.question("Tecle enter para continuar. ");
                deletando = false;
            }
            else {
                console.log("Op\u00E7\u00E3o inavalida!");
                ask.question("Tecle enter para continuar. ");
                deletando = false;
            }
        }
        else {
            console.log("Aluno n\u00E3o encontrado");
            ask.question("Tecle enter para continuar. ");
            deletando = false;
        }
    }
}
