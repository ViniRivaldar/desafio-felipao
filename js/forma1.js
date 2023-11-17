class heroiDaAventura{
    constructor(nome, idade, tipo, ataque){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ataque
    } 
    historia(){
        console.log(`O grande ${this.tipo}, ${this.nome} atacou usando ${this.ataque}`)
    }

}

let acaoDoHeroi = new heroiDaAventura("Vinicius",26,"mago", "magia")

acaoDoHeroi.historia()
