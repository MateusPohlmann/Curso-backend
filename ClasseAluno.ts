export class ClasseAluno {
    private nome: string
    getNome() {
        return this.nome
    }
    setNome(nomeNovo: string) {
        this.nome = nomeNovo
    }

    private idade: number
    getIdade() {
        return this.idade
    }
    setIdade(idadeNovo: number) {
        this.idade = idadeNovo
    }

    private nacio: string
    getNacio() {
        return this.nacio
    }
    setNacio(nacioNovo: string) {
        this.nacio = nacioNovo
    }

    private casa: string | null = null
    getCasa() {
        return this.casa
    }
    setCasa(casaNovo: string) {
        this.casa = casaNovo
    }

    private classeMagica: string
    getClasseMagica() {
        return this.classeMagica
    }
    setClasseMagica(classeMagicaNova: string) {
        this.classeMagica = classeMagicaNova
    }

    constructor(nome: string, idade: number, nacio: string, classeMagica: string){
        this.nome = nome
        this.idade = idade
        this.nacio = nacio
        this.classeMagica = classeMagica
    }

    sortearCasa() {
        let casas: Array<String> = ["Grifinória", "Sonserina", "Lufa-Lufa", "Corvinal"]

        let sorteio: String = casas[Math.floor(Math.random() * casas.length)]

        console.log(`Hummmmm........ .A casa escolhida foi......`)

        switch (sorteio) {
            case "Grifinória":
                console.log(`GRIFINÓRIA!!!`)
                this.setCasa("Grifinória")
                break
            case "Sonserina":
                console.log(`SONSERINA!!!`)
                this.setCasa("Sonserina")
                break
            case "Lufa-Lufa":
                console.log(`LUFA-LUFA!!!`)
                this.setCasa("Lufa-Lufa")
                break
            case "Corvinal":
                console.log(`CORVINAL!!!`)
                this.setCasa("Corvinal")
                break
        }
    }

    exibirInformacoes(): void{
        console.log(`
|---------------------------------------------------
| Nome: ${this.getNome()}
| Idade: ${this.getIdade()}
| Nacionalidade: ${this.getNacio()}
| Casa: ${this.getCasa()}
| Classe Magica: ${this.getClasseMagica()}
|---------------------------------------------------
`)
    }
}