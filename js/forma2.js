class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    determinarAtaque() {
        switch (this.tipo) {
            case 'mago':
                return 'usou magia';
            case 'guerreiro':
                return 'usou espada';
            case 'monge':
                return 'usou artes marciais';
            case 'ninja':
                return 'usou shuriken';
            default:
                return 'usou um ataque indefinido';
        }
    }

    atacar() {
        const ataque = this.determinarAtaque();
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}


const heroi2 = new Heroi("Herói 2", 25, "guerreiro");
heroi2.atacar();