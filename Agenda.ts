import { Contato } from "./Contato";

export class Agenda {
    private contatos: Array<Contato>

    constructor() {
        this.contatos = []
    }

    public adicionarContato(contatoNovo: Contato): void {
        this.contatos.push(contatoNovo)
    }

    public removerContato(nome: string): void {
        for (let contato of this.contatos) {
            if (nome === contato.getNome()) {
                this.contatos.slice(this.contatos.indexOf(contato), 1)
            }
        }
    }

    public listarContatos(): void {
        for (let i = 0; i < this.contatos.length; i++) {
            console.log(`Contato ${i + 1}: ${this.contatos[i].mostrarContato()}`)
        }
    }

    public buscarContato(nome: string): void {
        let encontrou: boolean = false
        for (let contato of this.contatos) {
            if (nome === contato.getNome()) {
                console.log(contato.mostrarContato())
                encontrou = true
            }
        }
        if (!encontrou) {
            console.log(`Contato inexistente.`)
        }
    }

    public editarContato(nome: string, contatoNovo: Contato) {
        let encontrou: boolean = false
        for (let i in this.contatos) {
            if (nome === this.contatos[i].getNome()) {
                this.contatos[i] = contatoNovo
                encontrou = true
            }
        }
        if (!encontrou) {
            console.log(`Contato inexistente.`)
        }
    }
}