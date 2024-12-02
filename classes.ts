interface Personagem {
    nome: string;
    vida: number;
    nacionalidade: string;
    estiloLuta: string;

    // Getters e Setters
    getNome(): string;
    setNome(nome: string): void;

    getVida(): number;
    setVida(vida: number): void;

    getNacionalidade(): string;
    setNacionalidade(nacionalidade: string): void;

    getEstiloLuta(): string;
    setEstiloLuta(estilo: string): void;

    // Golpes
    golpeLeve(): number;
    golpePesado(): number;
    golpeEspecial(): number;
}

class PersonagemImpl implements Personagem {
    nome: string;
    vida: number;
    nacionalidade: string;
    estiloLuta: string;

    constructor(nome: string, vida: number, nacionalidade: string, estiloLuta: string) {
        this.nome = nome;
        this.vida = vida;
        this.nacionalidade = nacionalidade;
        this.estiloLuta = estiloLuta;
    }

    // Getters e Setters
    getNome(): string {
        return this.nome;
    }

    setNome(nome: string): void {
        this.nome = nome;
    }

    getVida(): number {
        return this.vida;
    }

    setVida(vida: number): void {
        this.vida = vida;
    }

    getNacionalidade(): string {
        return this.nacionalidade;
    }

    setNacionalidade(nacionalidade: string): void {
        this.nacionalidade = nacionalidade;
    }

    getEstiloLuta(): string {
        return this.estiloLuta;
    }

    setEstiloLuta(estilo: string): void {
        this.estiloLuta = estilo;
    }

    // Golpes
    golpeLeve(): number {
        const dano = Math.random() < 0.7 ? this.danoMedio() : this.danoBaixo();
        return dano;
    }

    golpePesado(): number {
        const dano = Math.random() < 0.5 ? this.danoBaixo() : this.danoAlto();
        return dano;
    }

    golpeEspecial(): number {
        return this.danoAlto(); // Golpe especial sempre causa muito dano
    }

    // Métodos auxiliares para calcular o dano
    private danoMedio(): number {
        return Math.floor(Math.random() * (15 - 10 + 1)) + 10; // Dano médio entre 10 e 15
    }

    private danoBaixo(): number {
        return Math.floor(Math.random() * (5 - 1 + 1)) + 1; // Dano baixo entre 1 e 5
    }

    private danoAlto(): number {
        return Math.floor(Math.random() * (30 - 20 + 1)) + 20; // Dano alto entre 20 e 30
    }
} 