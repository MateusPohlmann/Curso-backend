const ask = require("readline-sync")
import { Contato } from "./Contato";
import { Agenda } from "./Agenda";

let Agenda1 = new Agenda()

let menu: boolean = true
while (menu) {
    console.clear()
    console.log(`
================= Agenda ================
( 1 ) > Adicionar contato
( 2 ) > Remover contato
( 3 ) > Listar contatos
( 4 ) > Buscar contato
( 5 ) > Editar contato
( 0 ) > Sair
`)

    let resposta: number = Number(ask.question(`Digite um numero: `))

    switch (resposta) {
        case 1:
            let nome = ask.question(`Qual sera o nome? `)
            let telefone = ask.question(`Qual sera o telefone? `)
            let email = ask.question(`Qual sera o email? `)
            let contatoNovo = new Contato(nome, telefone, email)
            Agenda1.adicionarContato(contatoNovo)
            console.log(`Contato adicionado!`)
            ask.question(`Tecle enter para continuar.`)
            break
        case 2:
            Agenda1.removerContato(ask.question(`Qual o nome do contato? `))
            ask.question(`Tecle enter para continuar.`)
            break
        case 3:
            Agenda1.listarContatos()
            ask.question(`Tecle enter para continuar.`)
            break
        case 4:
            ask.question(`Tecle enter para continuar.`)
            break
        case 5:
            ask.question(`Tecle enter para continuar.`)
            break
        case 0:
            menu = false
            break
    }
}